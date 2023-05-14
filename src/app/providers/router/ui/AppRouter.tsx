import { About } from 'pages/About';
import { Home } from 'pages/Home';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ path, ...props }) => (
                <Route key={path} path={path} {...props} />
            ))}
        </Routes>
    </Suspense>
);
