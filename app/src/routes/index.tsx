import { RouteProps } from 'react-router-dom';
import { HomeAsync as Home } from '../pages/Home/Home.async';
import { LoginAsync as Login } from '../pages/Login/Login.async';
import { ProductsAsync as Products } from '../pages/Products/Products.async';
import { NotFoundAsync as NotFound } from '../pages/NotFound/NotFound.async';

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
