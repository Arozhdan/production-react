import { About } from 'pages/About';
import { Home } from 'pages/Home';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback="loading">
        <Routes>
            {Object.values(routeConfig).map(({ path, ...props }) => (
                <Route key={path} path={path} {...props} />
            ))}
        </Routes>
    </Suspense>
);
