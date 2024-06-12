import { Navigate } from 'react-router-dom';
import useAuthStore from '@/zustand/useAuthStore';

const ProtectedRoute = ({ element, isPublic = false }) => {
  const isLogin = useAuthStore((state) => state.isLogin);

  if (isPublic) {
    return isLogin ? <Navigate to="/" /> : element;
  }

  return isLogin ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
