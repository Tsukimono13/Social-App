import { Text, TextAlign, TextSize, TextTheme } from '@/components/Text';
import { Navbar } from '@/widgets/Navbar';
import cls from './NavbarUsersPage.module.scss';
import { VStack } from '@/components/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { SignOutButton } from '@/widgets/SignOutButton';

interface NavbarUsersPageProps {
    className?: string;
}

export const NavbarUsersPage = memo((props: NavbarUsersPageProps) => {
    const { className } = props;

    return (
        <Navbar className={classNames(cls.NavbarUsersPage, {}, [className])}>
            <VStack className={cls.container} align="center" justify="start">
                <SignOutButton />
                <VStack
                    align="center"
                    justify="center"
                    gap="16"
                    className={cls.content}
                >
                    <Text
                        title="Наша команда"
                        size={TextSize.L}
                        theme={TextTheme.SECONDARY}
                    />
                    <Text
                        theme={TextTheme.SECONDARY}
                        align={TextAlign.CENTER}
                        text="Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. "
                    />
                </VStack>
            </VStack>
        </Navbar>
    );
});
