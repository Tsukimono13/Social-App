import { Navbar } from '@/widgets/Navbar';
import { HStack, VStack } from '@/components/Stack';
import { Text, TextSize, TextTheme } from '@/components/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarUserDetailedPage.module.scss';
import { SignOutButton } from '@/widgets/SignOutButton';
import { ReturnBackButton } from '@/widgets/ReturnBackButton';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { User } from '@/entities/Users/model/types/user';

interface NavbarUserDetailedPageProps {
    className?: string;
    user: User;
}

export const NavbarUserDetailedPage = (props: NavbarUserDetailedPageProps) => {
    const { className, user } = props;
    const isMobile = useIsMobile();

    return (
        <Navbar className={classNames(cls.NavbarUserDetailedPage, {}, [className])}>
            <HStack className={cls.container}>
                {isMobile ? (
                    <HStack justify="between" max>
                        <ReturnBackButton />
                        <SignOutButton />
                    </HStack>
                ) : (
                    <ReturnBackButton />
                )}
                <HStack gap="32" className={cls.personInfo}>
                    <img
                        src={user.photo}
                        alt={user.name}
                        width={187}
                        height={187}
                        className={cls.avatar}
                    />
                    <VStack gap="16" className={cls.info}>
                        <Text
                            title={user.name}
                            size={TextSize.L}
                            theme={TextTheme.SECONDARY}
                        />
                        <Text
                            text={user.status}
                            size={TextSize.L}
                            theme={TextTheme.SECONDARY}
                        />
                    </VStack>
                </HStack>
                <SignOutButton className={cls.signOutBtn} />
            </HStack>
        </Navbar>
    );
};
