import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RequireAuth } from './RequireAuth';
import { privateRoutes, publicRoutes, TAppRoutes } from '../../routes';
import { PageLoader } from '../PageLoader/PageLoader';

export const AppRouter = () => {
    const renderWithWrapper = (route: TAppRoutes) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    };

    return <Routes>{[...publicRoutes, ...privateRoutes].map(renderWithWrapper)}</Routes>;
};
