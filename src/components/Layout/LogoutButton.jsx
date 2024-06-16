import { removeTokenFromLocalStorage } from '@/utils';
import useAuthStore from '@/zustand/useAuthStore';
import { Button } from '../Button';

const LogoutButton = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    removeTokenFromLocalStorage();
  };

  return (
    <Button variant="secondary" onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
