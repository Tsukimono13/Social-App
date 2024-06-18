import { HStack, VStack } from '@/components/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UsersList.module.scss';
import { UsersListItem } from '../UsersListItem/UsersListItem';
import { Button, ThemeButton } from '@/components/Button';
import MoreArrowIcon from '@assets/icons/seeMore.svg';
import { User } from '../../model/types/user';
import { Loader } from '@/components/Loader/Loader';

interface UsersListProps {
    className?: string;
    isLoading?: boolean;
    error?: string;
    users: User[];
    onLoadNextPage: () => void;
    hasMore: boolean;
}

export const UsersList = (props: UsersListProps) => {
    const { className, users, error, isLoading, onLoadNextPage, hasMore } =
        props;

    if (isLoading) {
        return (
            <VStack align="center">
                <Loader />
            </VStack>
        );
    }

    return (
        <VStack
            align="center"
            className={classNames(cls.UsersList, {}, [className])}
        >
            <HStack gap="20" wrap className={cls.container}>
                {users.map((item) => (
                    <UsersListItem user={item} key={item.id} />
                ))}
            </HStack>
            <Button
                theme={ThemeButton.OUTLINED_DARK}
                className={cls.seeMoreBtn}
                onClick={onLoadNextPage}
                disabled={!hasMore || isLoading}
            >
                Показать еще <MoreArrowIcon />
            </Button>
        </VStack>
    );
};
