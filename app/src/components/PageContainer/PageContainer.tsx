import { ReactNode } from 'react';

import cls from './PageContainer.module.scss';
import { classNames } from '../../utils/helpers/classNames/classNames';

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

export const PageContainer = (props: PageContainerProps) => {
    const { children, className } = props;

    return <main className={classNames(cls.PageContainer, {}, [className])}>{children}</main>;
};
