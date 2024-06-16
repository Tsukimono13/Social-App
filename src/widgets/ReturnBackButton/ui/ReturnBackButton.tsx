import { Button, ThemeButton } from '@/components/Button';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReturnBackButton.module.scss';
import BackIcon from '@assets/icons/backArrow.svg';

interface ReturnBackButtonProps {
    className?: string;
}

export const ReturnBackButton = (props: ReturnBackButtonProps) => {
    const { className } = props;
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile ? (
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.ReturnBackButton, {}, [
                        className,
                    ])}
                >
                    <BackIcon />
                </Button>
            ) : (
                <Button
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
