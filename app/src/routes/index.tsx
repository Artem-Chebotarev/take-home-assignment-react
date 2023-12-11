import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { RouteProps } from 'react-router-dom';
import { Products } from '../pages/Products/Products';
import { NotFound } from '../pages/NotFound/NotFound';

export type TAppRoutes = RouteProps & {
    authOnly: boolean;
};

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    PRODUCTS = '/products',
}

export const publicRoutes: TAppRoutes[] = [
    { path: RouteNames.LOGIN, element: <Login />, authOnly: false },
    { path: RouteNames.HOME, element: <Home />, authOnly: false },
    { path: '*', element: <NotFound />, authOnly: false },
];

export const privateRoutes: TAppRoutes[] = [{ path: RouteNames.PRODUCTS, element: <Products />, authOnly: true }];
