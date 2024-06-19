import { Button, ThemeButton } from '@/components/Button';
import EyeOffIcon from '@assets/icons/eye-off.svg';
import EyeOnIcon from '@assets/icons/eye-on.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

interface PasswordVisibilityProps {
    showPassword: boolean;
    setShowPassword: (showPassword: boolean) => void;
    className?: string;
}

export const PasswordVisibility = memo((props: PasswordVisibilityProps) => {
    const { showPassword, setShowPassword, className } = props;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Button
            onClick={togglePasswordVisibility}
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
        </Button>
    );
});
