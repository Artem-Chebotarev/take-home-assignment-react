import { FormEvent, useState } from 'react';
import JudoLogo from '../../assets/Logo.png';
import { Input } from '../Input/Input';
import { Button, ButtonSize } from '../Button/Button';

import cls from './LoginForm.module.scss';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className={cls.LoginForm} onSubmit={handleSubmit}>
            <img className={cls.Logo} src={JudoLogo} alt="judo_logo" />

            <p className={cls.Text}>Sign In</p>

            <Input
                className={cls.InputEmail}
                value={email}
                onChange={setEmail}
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
            />

            <Input
                className={cls.InputPassword}
                value={password}
                onChange={setPassword}
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
            />

            <Button className={cls.Button} type="submit" size={ButtonSize.M} fullWidth>
                Sign In
            </Button>

            <Link className={cls.TextForgotPassword} to={'/'} target="_blank">
                <p>Forgot password?</p>
            </Link>
        </form>
    );
};
