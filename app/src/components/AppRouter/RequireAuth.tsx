import { Navigate, useLocation } from 'react-router-dom';
import { ACCESS_TOKEN, EXPIRES_AT, REFRESH_TOKEN } from '../../shared/consts/consts';
import { RouteNames } from '../../routes';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth(props: RequireAuthProps) {
    const { children } = props;

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    const expiresAt = localStorage.getItem(EXPIRES_AT);

    const auth = accessToken && refreshToken && expiresAt;

    const location = useLocation();

    if (!auth) {
        return <Navigate to={RouteNames.LOGIN} state={{ from: location }} replace />;
    }

    return children;
}
