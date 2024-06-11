import { createBrowserRouter } from 'react-router-dom';
import { Home, Detail, Signin, Signup, EditProfile } from '@/pages';
import { Container } from '@/components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'edit-profile',
        element: <EditProfile />,
      },
    ],
  },
]);

export default router;
