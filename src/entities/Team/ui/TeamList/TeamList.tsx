import { HStack, VStack } from '@/components/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamList.module.scss';
import { TeamListItem } from '../TeamItem/TeamListItem';
import { Button, ThemeButton } from '@/components/Button';
import MoreArrowIcon from '@assets/icons/seeMore.svg';

interface TeamListProps {
    className?: string;
}

export const TeamList = (props: TeamListProps) => {
    const { className } = props;
    return (
        <VStack
            align="center"
            className={classNames(cls.TeamList, {}, [className])}
        >
            <HStack gap="20" wrap className={cls.container}>
                <TeamListItem />
                <TeamListItem />
                <TeamListItem />
                <TeamListItem />
                <TeamListItem />
                <TeamListItem />
            </HStack>
            <Button theme={ThemeButton.OUTLINED_DARK} className={cls.seeMoreBtn}>
                Показать еще <MoreArrowIcon />
            </Button>
        </VStack>
    );
};
