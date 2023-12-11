import { LoginForm } from '../../components/LoginForm/LoginForm';

import cls from './Login.module.scss';

const Login = () => {
    return (
        <div className={cls.Login}>
            <LoginForm />
        </div>
    );
};

export default Login;
