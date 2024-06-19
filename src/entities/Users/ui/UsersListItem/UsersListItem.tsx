import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UsersListItem.module.scss';
import { Card } from '@/components/Card';
import { Text, TextTheme } from '@/components/Text';
import UnLikeIcon from '@assets/icons/Like.svg';
import LikedIcon from '@assets/icons/liked.svg';
import { Button, ThemeButton } from '@/components/Button';
import { AppLink } from '@/components/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { User } from '../../model/types/user';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useLikeUser } from '@/features/updateLike';
import { memo, useEffect } from 'react';
import { fetchUsers } from '../../model/services/fetchUsers/fetchUsers';

interface UsersListItemProps {
    className?: string;
    user: User;
}

export const UsersListItem = memo((props: UsersListItemProps) => {
    const { className, user } = props;
    const dispatch = useAppDispatch();
    const [updateLike, { isError, isSuccess }] = useLikeUser();

    const handleLikeToggle = () => {
        updateLike({ userId: user.id.toString(), like: !user.like }).unwrap();
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(fetchUsers({ page: 1 }));
        }
    }, [dispatch, isSuccess]);

    if (isError) {
        return <Text text="Произошла ошибка" theme={TextTheme.ERROR} />;
    }

    return (
        <Card className={classNames(cls.UsersListItem, {}, [className])}>
            <AppLink to={RoutePath.users + user.id}>
                <img src={user.photo} alt={user.name} className={cls.photo} />
                <Text text={user.name} />
            </AppLink>
            <Button theme={ThemeButton.CLEAR} onClick={handleLikeToggle}>
                {user.like ? <LikedIcon /> : <UnLikeIcon />}
            </Button>
        </Card>
    );
});
