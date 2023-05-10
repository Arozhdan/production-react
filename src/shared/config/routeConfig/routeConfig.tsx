import { About } from 'pages/About';
import { Home } from 'pages/Home';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths[AppRoutes.MAIN],
        element: <Home />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths[AppRoutes.ABOUT],
        element: <About />,
    },
};
