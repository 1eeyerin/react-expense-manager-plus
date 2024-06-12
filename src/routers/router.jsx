import { createBrowserRouter } from 'react-router-dom';
import { Home, Detail, Signin, Signup, EditProfile } from '@/pages';
import { Container } from '@/components/Layout';
import commonLoader from './commonLoader';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    loader: commonLoader,
    element: <Container />,
    children: [
      {
        index: true,
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: 'detail/:id',
        element: <ProtectedRoute element={<Detail />} />,
      },
      {
        path: 'edit-profile',
        element: <ProtectedRoute element={<EditProfile />} />,
      },
      {
        path: 'signin',
        element: <ProtectedRoute element={<Signin />} isPublic />,
      },
      {
        path: 'signup',
        element: <ProtectedRoute element={<Signup />} isPublic />,
      },
    ],
  },
]);

export default router;
