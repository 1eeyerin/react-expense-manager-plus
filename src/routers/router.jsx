import { createBrowserRouter } from 'react-router-dom';
import { Home, Detail, Signin, Signup, EditProfile } from '@/pages';
import { Container } from '@/components/Layout';
import ProtectedRoute from './ProtectedRoute';

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
        element: <ProtectedRoute element={<Signin />} isPublic />,
      },
      {
        path: 'signup',
        element: <ProtectedRoute element={<Signup />} isPublic />,
      },
      {
        path: 'edit-profile',
        element: <ProtectedRoute element={<EditProfile />} />,
      },
    ],
  },
]);

export default router;
