import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <nav className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink color="secondary" to="/">
                Home
            </AppLink>
            <AppLink color="secondary" to="/about">
                About
            </AppLink>
        </div>
    </nav>
);
