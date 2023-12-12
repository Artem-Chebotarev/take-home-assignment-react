import { PageContainer } from '../PageContainer/PageContainer';

import cls from './PageError.module.scss';

export const PageError = () => (
    <PageContainer>
        <p className={cls.Text}>Error has happened</p>
    </PageContainer>
);
