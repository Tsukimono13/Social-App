import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getProfileAuthData } from '@/entities/AuthData';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getProfileAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.sign_in} state={{ from: location }} replace />;
    }

    return children;
}
