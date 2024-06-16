import { Navbar } from '@/widgets/Navbar';
import { HStack, VStack } from '@/components/Stack';
import { Text, TextSize, TextTheme } from '@/components/Text';
import Avatar from '@assets/img/avatarBig.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarTeamMemberPage.module.scss';
import { SignOutButton } from '@/widgets/SignOutButton';
import { ReturnBackButton } from '@/widgets/ReturnBackButton';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { User } from '@/entities/Team/model/types/user';

interface NavbarTeamMemberPageProps {
    className?: string;
    user: User;
}

export const NavbarTeamMemberPage = (props: NavbarTeamMemberPageProps) => {
    const { className, user } = props;
    const isMobile = useIsMobile();

    return (
        <Navbar className={classNames(cls.NavbarTeamMemberPage, {}, [])}>
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
                        src={Avatar}
                        alt="Артур Королёв"
                        width={187}
                        height={187}
                    />
                    <VStack gap="16" className={cls.info}>
                        <Text
                            title={user.name}
                            size={TextSize.L}
                            theme={TextTheme.SECONDARY}
                        />
                        <Text
                            text="Партнер"
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
