/// <reference types="vite-plugin-svgr/client" />
import SpinnerImg from '../../assets/spinner.svg?react';
import { PageContainer } from '../PageContainer/PageContainer';

import cls from './PageLoader.module.scss';

export const PageLoader = () => (
    <PageContainer>
        <div className={cls.LoaderWrapper}>
            <div className={cls.LoaderBox}>
                <SpinnerImg />
            </div>
        </div>
    </PageContainer>
);
