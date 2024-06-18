import { Button, ThemeButton } from '@/components/Button';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReturnBackButton.module.scss';
import BackIcon from '@assets/icons/backArrow.svg';
import { useNavigate } from 'react-router-dom';

interface ReturnBackButtonProps {
    className?: string;
}

export const ReturnBackButton = (props: ReturnBackButtonProps) => {
    const { className } = props;
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const goBackClick = () => {
        navigate(-1);
    };

    return (
        <>
            {isMobile ? (
                <Button
                    onClick={goBackClick}
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.ReturnBackButton, {}, [
                        className,
                    ])}
                >
                    <BackIcon />
                </Button>
            ) : (
                <Button
                    onClick={goBackClick}
                    className={classNames(cls.ReturnBackButton, {}, [
                        className,
                    ])}
                >
                    Назад
                </Button>
            )}
        </>
    );
};
