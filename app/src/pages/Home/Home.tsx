import { Button, ButtonSize } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

import cls from './Home.module.scss';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={cls.Home}>
            <Button size={ButtonSize.L} onClick={() => navigate('./login')}>
                Go to LogIn
            </Button>
        </div>
    );
};
