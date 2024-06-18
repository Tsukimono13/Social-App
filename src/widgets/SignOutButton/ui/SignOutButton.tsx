import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { Button, ThemeButton } from '@/components/Button';
import SignOutIcon from '@assets/icons/signOut.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SignOutButton.module.scss';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getProfileAuthData, profileActions } from '@/entities/AuthData';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

interface SignOutButtonProps {
    className?: string;
}

export const SignOutButton = memo((props: SignOutButtonProps) => {
    const { className } = props;
    const isMobile = useIsMobile();
    const navigate = useNavigate();
    const authData = useSelector(getProfileAuthData);
    const dispatch = useAppDispatch();

    const signInClick = () => {
        navigate(RoutePath.sign_in);
    };

    const onLogout = useCallback(() => {
        dispatch(profileActions.logout());
    }, [dispatch]);

    const buttonText = authData ? 'Выйти' : 'Войти';

    return (
        <>
            {isMobile ? (
                <Button
                    onClick={authData ? onLogout : signInClick}
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.SignOutButton, {}, [className])}
                >
                    <SignOutIcon />
                </Button>
            ) : (
                <Button
                    onClick={authData ? onLogout : signInClick}
                    className={classNames(cls.SignOutButton, {}, [className])}
                >
                    {buttonText}
                </Button>
            )}
        </>
    );
});
