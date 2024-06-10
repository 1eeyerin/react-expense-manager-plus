import { createBrowserRouter } from 'react-router-dom';
import { Home, Detail } from '@/pages';
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
    ],
  },
]);

export default router;
