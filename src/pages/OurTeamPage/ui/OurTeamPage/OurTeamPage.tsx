import { VStack } from '@/components/Stack';
import { TeamList } from '@/entities/Team';
import cls from './OurTeamPage.module.scss';
import { NavbarTeamPage } from '../NavbarTeamPage/NavbarTeamPage';
import { getUsers, getUsersError, getUsersIsLoading } from '@/entities/Team/model/selectors/userListSelectors';
import { useSelector } from 'react-redux';
import { Text } from '@/components/Text';
import { useAppSelector } from '@/shared/hooks/useAppSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchUsers } from '@/entities/Team/model/services/fetchUsers/fetchUsers';

const OurTeamPage = () => {
    const users = useAppSelector(getUsers);
    const error = useAppSelector(getUsersError);
    const isLoading = useAppSelector(getUsersIsLoading);

    const dispatch = useAppDispatch();

    console.log(users, 'USERS')

    useEffect(() => {
        dispatch(fetchUsers(""));
    }, [dispatch]);

    if (error) {
        return <Text text={'Ошибка при загрузке статей'} />;
    }

    return (
        <VStack align='center' max className={cls.OurTeamPage}>
           <NavbarTeamPage />
            <TeamList users={users} isLoading={isLoading} />
        </VStack>
    );
};

export default OurTeamPage;
