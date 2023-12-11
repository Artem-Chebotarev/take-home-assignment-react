import { ChangeEvent, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/helpers/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    /**
     * Additional styles for the input
     */
    className?: string;
    /**
     * Label of the value
     */
    label?: string;
    /**
     * Id of the value
     */
    id?: string;
    /**
     * Value of the input
     */
    value?: string | number;
    /**
     * Function to change value of the input
     */
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const { className, value, onChange, type = 'text', label, id, ...otherProps } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {label && (
                <label className={cls.Label} htmlFor={id}>
                    {label}
                </label>
            )}

            <input {...otherProps} id={id} type={type} value={value} onChange={onChangeHandler} className={cls.Input} />
        </div>
    );
};
