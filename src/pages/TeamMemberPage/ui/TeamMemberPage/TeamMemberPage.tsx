import { VStack } from '@/components/Stack';
import { NavbarTeamMemberPage } from '../NavbarTeamMemberPage/NavbarTeamMemberPage';
import { TeamMemberDescription } from '@/entities/Team/ui/TeamMemberDescription/TeamMemberDescription';
import cls from './TeamMemberPage.module.scss';
import { fetchUserById } from '@/entities/Team/model/services/fetchUserById/fetchUserById';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@/components/Text';
import { getUserDetailsData } from '@/entities/Team/model/selectors/userDetailsSelectors';

interface TeamMemberPage {
  className?: string;
}

const TeamMemberPage = (props: TeamMemberPage) => {
  const { className } = props;
    const dispatch = useAppDispatch();
    
    const {id} = useParams<{id: string}>();

    const user = useSelector(getUserDetailsData);
    const error = useSelector(getUserDetailsData);
    const isLoading = useSelector(getUserDetailsData);

    useEffect(() => {
        dispatch(fetchUserById(id));
    }, [dispatch, id]);

    if (!id) {
      return <Text text={'Пользователь не найден'} />
    }

    if (isLoading) {
      return <Text text="Загрузка..." />;
    }
  
    if (error) {
      return <Text text="Ошибка при загрузке пользователя" />;
    }
  
    if (!user) {
      return <Text text="Пользователь не найден" />;
    }

    return (
        <VStack align="center" max>
            <NavbarTeamMemberPage user={user}/>
            <TeamMemberDescription user={user} className={cls.TeamMemberDescription} />
        </VStack>
    );
};

export default TeamMemberPage;
