import { HStack, VStack } from '@/components/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamList.module.scss';
import { TeamListItem } from '../TeamItem/TeamListItem';
import { Button, ThemeButton } from '@/components/Button';
import MoreArrowIcon from '@assets/icons/seeMore.svg';
import { User } from '../../model/types/user';

interface TeamListProps {
    className?: string;
    isLoading?: boolean;
    error?: string;
    users: User[];
}

export const TeamList = (props: TeamListProps) => {
    const { className, users, error, isLoading } = props;
    return (
        <VStack
            align="center"
            className={classNames(cls.TeamList, {}, [className])}
        >
            <HStack gap="20" wrap className={cls.container}>
                {users.map((item) => (
                    <TeamListItem user={item} key={item.id}/>
                ))}
            </HStack>
            <Button
                theme={ThemeButton.OUTLINED_DARK}
                className={cls.seeMoreBtn}
            >
                Показать еще <MoreArrowIcon />
            </Button>
        </VStack>
    );
};
