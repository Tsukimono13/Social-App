import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamListItem.module.scss';
import { Card } from '@/components/Card';
import { Text } from '@/components/Text';
import Photo from '@assets/img/photo.png';
import UnLikeIcon from '@assets/icons/Like.svg';
import LikedIcon from '@assets/icons/liked.svg';
import { Button, ThemeButton } from '@/components/Button';
import { AppLink } from '@/components/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { User } from '../../model/types/user';

interface TeamListItemProps {
    className?: string;
    user: User;
}

export const TeamListItem = (props: TeamListItemProps) => {
    const { className, user } = props;
    return (
        <AppLink to={RoutePath.users + user.id}>
            <Card className={classNames(cls.TeamListItem, {}, [className])}>
                <img src={user.phone} alt={user.name} className={cls.photo} />
                <Text text={user.name} />
                <Button theme={ThemeButton.CLEAR}>
                    {user.like ? <LikedIcon/> : <UnLikeIcon />}
                </Button>
            </Card>
        </AppLink>
    );
};
