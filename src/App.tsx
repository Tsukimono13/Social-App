import { OurTeamPage } from '@pages/OurTeamPage';
import { TeamMemberPage } from '@pages/TeamMemberPage';
import { Route, Routes } from 'react-router-dom';
import {
    RoutePath,
    routeConfig,
} from './shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { SignInPage } from './pages/SignInPage';

function App() {
    return (
        <>
            <Suspense fallback="Is loading">
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
