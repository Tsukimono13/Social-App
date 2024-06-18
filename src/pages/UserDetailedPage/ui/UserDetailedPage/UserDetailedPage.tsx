import { VStack } from '@/components/Stack';
import cls from './UserDetailedPage.module.scss';
import { fetchUserById } from '@/entities/UserDetailed/model/services/fetchUserById/fetchUserById';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@/components/Text';
import { getUserDetailsData, getUserDetailsError, getUserDetailsIsLoading } from '@/entities/UserDetailed/model/selectors/userDetailsSelectors';
import { NavbarUserDetailedPage } from '../NavbarUserDetailedPage/NavbarUserDetailedPage';
import { UserDescription } from '@/entities/UserDetailed';
import { Loader } from '@/components/Loader/Loader';

interface UserDetailedPageProps {
    className?: string;
}

const UserDetailedPage = (props: UserDetailedPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const { id } = useParams<{ id: string }>();

    const user = useSelector(getUserDetailsData);
    const error = useSelector(getUserDetailsError);
    const isLoading = useSelector(getUserDetailsIsLoading);

    useEffect(() => {
        dispatch(fetchUserById(id));
    }, [dispatch, id]);

    if (!id) {
        return <Text text={'Пользователь не найден'} />;
    }

    if (isLoading) {
        return <VStack align='center'><Loader /></VStack>;
    }

    if (error) {
        return <Text text="Ошибка при загрузке пользователя" />;
    }

    if (!user) {
        return <Text text="Пользователь не найден" />;
    }

    return (
        <VStack align="center" max>
            <NavbarUserDetailedPage user={user} />
            <UserDescription
                user={user}
                className={cls.UserDetailedPage}
            />
        </VStack>
    );
};

export default UserDetailedPage;
