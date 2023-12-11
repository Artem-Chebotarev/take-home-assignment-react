/// <reference types="vite-plugin-svgr/client" />
import SpinnerImg from '../../assets/spinner.svg?react';

import cls from './PageLoader.module.scss';

export const PageLoader = () => (
    <div className={cls.PageLoader}>
        <div className={cls.LoaderWrapper}>
            <div className={cls.LoaderBox}>
                <SpinnerImg />
            </div>
        </div>
    </div>
);
