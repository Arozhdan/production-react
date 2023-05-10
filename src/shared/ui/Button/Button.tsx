import { classNames } from 'shared/lib/classNames';
import React from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'clear';
}

export const Button = ({
    className,
    children,
    variant = 'clear',
    type = 'button',
    ...props
}: ButtonProps) => (
    <button
        type="button"
        className={classNames(cls.Button, {}, [className, cls[variant]])}
        {...props}
    >
        {children}
    </button>
);
