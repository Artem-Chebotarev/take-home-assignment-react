import { useNavigate } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { RouteNames } from '../../routes';
import { PageContainer } from '../../components/PageContainer/PageContainer';

const Home = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <Button size={ButtonSize.L} onClick={() => navigate(RouteNames.LOGIN)}>
                Go to LogIn
            </Button>
        </PageContainer>
    );
};

export default Home;
