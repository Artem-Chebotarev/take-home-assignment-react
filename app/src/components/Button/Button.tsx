import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '../../utils/helpers/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Additional styles for the button
     */
    className?: string;
    /**
     * Size of the button
     */
    size?: ButtonSize;
    /**
     * Children
     */
    children?: ReactNode;
    /**
     * Makes width: 100%
     */
    fullWidth?: boolean;
}

export const Button = (props: ButtonProps) => {
    const { className, children, size = ButtonSize.M, disabled, fullWidth, ...otherProps } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button {...otherProps} className={classNames(cls.Button, mods, [className, cls[size]])}>
            {children}
        </button>
    );
};
