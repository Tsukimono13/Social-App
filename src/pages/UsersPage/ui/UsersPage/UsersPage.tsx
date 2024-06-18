import { VStack } from '@/components/Stack';
import cls from './UsersPage.module.scss';
import {
    getUsers,
    getUsersError,
    getUsersHasMore,
    getUsersIsLoading,
    getUsersPage,
} from '@/entities/Users/model/selectors/userListSelectors';
import { Text } from '@/components/Text';
import { useAppSelector } from '@/shared/hooks/useAppSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { fetchUsers } from '@/entities/Users/model/services/fetchUsers/fetchUsers';
import { NavbarUsersPage } from '../NavbarUsersPage/NavbarUsersPage';
import { UsersList } from '@/entities/Users';
import { usersActions } from '@/entities/Users/model/slice/usersSlice';
import { Loader } from '@/components/Loader/Loader';

const UsersPage = () => {
    const users = useAppSelector(getUsers);
    const error = useAppSelector(getUsersError);
    const isLoading = useAppSelector(getUsersIsLoading);
    const page = useAppSelector(getUsersPage);
    const hasMore = useAppSelector(getUsersHasMore);
    const dispatch = useAppDispatch();

    const onLoadNextPage = useCallback(() => {
        dispatch(usersActions.setPage(page + 1));
        dispatch(fetchUsers({ page: page + 1 }));
    }, [page, dispatch]);

    useEffect(() => {
        dispatch(fetchUsers({ page: 1 }));
    }, [dispatch]);

    if (error) {
        return <Text text={'Ошибка при загрузке пользователей'} />;
    }

    if (isLoading) {
        return (
            <VStack align="center">
                <Loader />
            </VStack>
        );
    }

    return (
        <VStack align="center" max className={cls.UsersPage}>
            <NavbarUsersPage />
            <UsersList
                users={users}
                isLoading={isLoading}
                onLoadNextPage={onLoadNextPage}
                hasMore={hasMore}
            />
        </VStack>
    );
};

export default UsersPage;
