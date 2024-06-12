import { useNavigate } from 'react-router-dom';
import { removeTokenFromLocalStorage } from '@/utils';
import useAuthStore from '@/zustand/useAuthStore';
import { Button } from '../Button';

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    removeTokenFromLocalStorage();
    navigate('/signin');
  };

  return (
    <Button variant="secondary" onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
