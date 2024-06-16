import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { Button, ThemeButton } from '@/components/Button';
import SignOutIcon from '@assets/icons/signOut.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SignOutButton.module.scss';
import { memo } from 'react';

interface SignOutButtonProps {
    className?: string;
}

export const SignOutButton = memo((props: SignOutButtonProps) => {
    const { className } = props;
    const isMobile = useIsMobile();

    //const authData = useSelector(getUserData);

    // if (authData) {
    //     return (
    //         <header className={classNames(cls.navbar, {}, [className])}>
    //             <Button>Выйти</Button>
    //         </header>
    //     );
    // }

    return (
        <>
            {isMobile ? (
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.SignOutButton, {}, [className])}
                >
                    <SignOutIcon />
                </Button>
            ) : (
                <Button
                    className={classNames(cls.SignOutButton, {}, [className])}
                >
                    Войти
                </Button>
            )}
        </>
    );
});
