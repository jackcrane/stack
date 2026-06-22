import { createBrowserRouter } from 'react-router-dom';

import { AppShell } from './components/AppShell';
import { SignInPage } from './features/auth/routes/SignInPage';
import { SignUpPage } from './features/auth/routes/SignUpPage';
import { DashboardPage } from './features/dashboard/routes/DashboardPage';
import { FilesPage } from './features/files/routes/FilesPage';
import { HomePage } from './features/home/routes/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'files',
        element: <FilesPage />,
      },
    ],
  },
]);
