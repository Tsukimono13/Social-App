import { VStack } from '@/components/Stack';
import { TeamList } from '@/entities/Team';
import cls from './OurTeamPage.module.scss';
import { NavbarTeamPage } from '../NavbarTeamPage/NavbarTeamPage';

const OurTeamPage = () => {

    return (
        <VStack align='center' max className={cls.OurTeamPage}>
           <NavbarTeamPage />
            <TeamList />
        </VStack>
    );
};

export default OurTeamPage;
