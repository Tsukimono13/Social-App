import { NotFoundPage } from '@/pages/NotFoundPage';
import {  UsersPage } from '@/pages/UsersPage';
import { SignInPage } from '@/pages/SignInPage';
import {  UserDetailedPage } from '@/pages/UserDetailedPage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
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

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <UsersPage />,
        authOnly: true,
    },
    [AppRoutes.USERS]: {
        path: `${RoutePath.users}:id`,
        element: <UserDetailedPage />,
        authOnly: true,
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
