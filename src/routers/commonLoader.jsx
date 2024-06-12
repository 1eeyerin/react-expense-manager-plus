import { Navigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { getTokenFromLocalStorage } from '@/utils';
import { getUser } from '@/api/auth';
import useAuthStore from '@/zustand/useAuthStore';

const commonLoader = async () => {
  const token = getTokenFromLocalStorage();
  if (isEmpty(token)) {
    return <Navigate to="/signin" />;
  }

  try {
    const user = await getUser();
    if (isEmpty(user)) {
      return <Navigate to="/signin" />;
    }
    const useStoreInstance = useAuthStore.getState();
    useStoreInstance.setUser(user);
  } catch (error) {
    return <Navigate to="/signin" />;
  }

  return null;
};

export default commonLoader;
