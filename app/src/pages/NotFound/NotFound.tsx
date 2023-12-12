import { PageContainer } from '../../components/PageContainer/PageContainer';

import cls from './NotFound.module.scss';

const NotFound = () => {
    return (
        <PageContainer>
            <p className={cls.Text}>Page not found</p>
        </PageContainer>
    );
};

export default NotFound;
