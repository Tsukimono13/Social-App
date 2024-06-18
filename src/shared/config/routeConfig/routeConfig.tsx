import { NotFoundPage } from '@/pages/NotFoundPage';
import {  UsersPage } from '@/pages/UsersPage';
import { SignInPage } from '@/pages/SignInPage';
import {  UserDetailedPage } from '@/pages/UserDetailedPage';

interface AppRouteProps {
    path: string;
    element: JSX.Element;
}

export enum AppRoutes {
    MAIN = 'main',
    USERS = 'users',
    SIGN_IN = 'sign_in',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.USERS]: '/users/', // + :id
    [AppRoutes.SIGN_IN]: '/signin',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <UsersPage />,
    },
    [AppRoutes.USERS]: {
        path: `${RoutePath.users}:id`,
        element: <UserDetailedPage />,
    },
    [AppRoutes.SIGN_IN]: {
        path: RoutePath.sign_in,
        element: <SignInPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
