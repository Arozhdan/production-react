import { classNames } from 'shared/lib/classNames';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

type AppLinkProps = {
  className?: string;
  color?: 'primary' | 'secondary';
} & LinkProps;

export const AppLink = ({
    className,
    children,
    color,
    ...props
}: AppLinkProps) => (
    <Link
        className={classNames(cls.AppLink, {}, [className, cls[color]])}
        {...props}
    >
        {children}
    </Link>
);
