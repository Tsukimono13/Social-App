import { ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    children?: ReactNode;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className, children } = props;

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            {children}
        </header>
    );
});
