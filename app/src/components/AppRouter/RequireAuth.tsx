import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth(props: RequireAuthProps) {
    const { children } = props;

    // TODO: check user
    const auth = true;
    const location = useLocation();

    if (!auth) {
        return <Navigate to={'/login'} state={{ from: location }} replace />;
    }

    return children;
}
