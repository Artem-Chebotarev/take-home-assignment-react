import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import JudoLogo from '../../assets/Logo.png';
import { Input } from '../Input/Input';
import { Button, ButtonSize } from '../Button/Button';
import { ACCESS_TOKEN, EXPIRES_AT, REFRESH_TOKEN } from '../../shared/consts/consts';
import { ILoginResponse } from '../../api/authApi/types';
import { AUTHENTICATE } from '../../api/authApi/auth';
import { RouteNames } from '../../routes';

import cls from './LoginForm.module.scss';

export const LoginForm = () => {
    // TODO:custom hook useLoginForm
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [login, { loading, error }] = useMutation<ILoginResponse>(AUTHENTICATE);

    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const getLogin = async () => {
            const response = await login({
                variables: {
                    email: email,
                    password: password,
                },
            });

            if (response?.data) {
                const { accessToken, refreshToken, expiresAt } = response.data.authenticate;

                // Set auth info in LS
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
                localStorage.setItem(EXPIRES_AT, expiresAt);

                // Redirect on Products page
                navigate(RouteNames.PRODUCTS);
            }
        };

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getLogin();
    };

    // If a user is already signed in redirect to /products
    useEffect(() => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const expiresAt = localStorage.getItem(EXPIRES_AT);

        if (accessToken && refreshToken && expiresAt) {
            navigate(RouteNames.PRODUCTS);
        }
    }, []);

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
                required
            />

            <Input
                className={cls.InputPassword}
                value={password}
                onChange={setPassword}
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
            />

            {/* 
            I decided not to display the specific error text (email not found or Invalid Password), 
            although I saw that in the response from the API I could get one of these two errors. 
            I decided to add the general information Wrong Email or Password, which will not make 
            it clear what exactly was wrong about the login attempt. I did it for security reasons. 
            For example, an attacker tries to log in to the application and receives an "email not found", 
            he starts going through possible email options, and when an "Invalid Password" error occurs, 
            it means that he has picked up the email of someone from the users and can use it in the future.
            */}
            {error && <p className={cls.TextError}>Wrong Email or Password</p>}

            <Button className={cls.Button} type="submit" size={ButtonSize.M} fullWidth disabled={loading}>
                {loading ? 'Loading...' : 'Sign In'}
            </Button>

            <Link className={cls.TextForgotPassword} to={RouteNames.HOME} target="_blank">
                <p>Forgot password?</p>
            </Link>
        </form>
    );
};
