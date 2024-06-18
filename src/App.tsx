import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { profileActions } from './entities/AuthData';
import { Loader } from './components/Loader/Loader';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(profileActions.initAuthData());
    }, [dispatch]);

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
