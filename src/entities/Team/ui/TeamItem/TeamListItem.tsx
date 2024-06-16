import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamListItem.module.scss';
import { Card } from '@/components/Card';
import { Text } from '@/components/Text';
import Photo from '@assets/img/photo.png';
import LikeIcon from '@assets/icons/Like.svg';
import { Button, ThemeButton } from '@/components/Button';

interface TeamListItemProps {
    className?: string;
}

export const TeamListItem = (props: TeamListItemProps) => {
    const { className } = props;
    return (
        <Card className={classNames(cls.TeamListItem, {}, [className])}>
            <img src={Photo} alt="Артур Королёв" className={cls.photo} />
            <Text text="Артур Королёв" />
            <Button theme={ThemeButton.CLEAR}><LikeIcon /></Button>
        </Card>
    );
};
