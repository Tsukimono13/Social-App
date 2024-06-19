import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense, useEffect, useMemo } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getProfileAuthData, profileActions } from '@/entities/AuthData';
import { Loader } from '@/components/Loader/Loader';
import { useSelector } from 'react-redux';
import { VStack } from '@/components/Stack';

function App() {
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getProfileAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        });
    }, [isAuth]);

    useEffect(() => {
        dispatch(profileActions.initAuthData());
    }, [dispatch]);

    return (
        <>
            <Suspense
                fallback={
                    <VStack align="center">
                        <Loader />
                    </VStack>
                }
            >
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
