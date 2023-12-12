import { LoginForm } from '../../components/LoginForm/LoginForm';
import { PageContainer } from '../../components/PageContainer/PageContainer';

import cls from './Login.module.scss';

const Login = () => {
    return (
        <PageContainer className={cls.Login}>
            <LoginForm />
            <p className={cls.Text}>
                ©️2001-2019 All Rights Reserved. Clip® is a registered trademark of Rover Labs. Cookie Preferences,
                Privacy, and Teams.
            </p>
        </PageContainer>
    );
};

export default Login;
