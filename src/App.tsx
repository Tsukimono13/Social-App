import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getProfileDataInited, profileActions } from '@/entities/AuthData';
import { AppRouter } from './app/router';
import { useSelector } from 'react-redux';

function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getProfileDataInited)

    useEffect(() => {
        dispatch(profileActions.initAuthData());
    }, [dispatch]);

    return (
        <>
            {inited && <AppRouter />}
        </>
    );
}

export default App;
