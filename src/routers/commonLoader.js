import { isEmpty } from 'lodash';
import { getTokenFromLocalStorage } from '@/utils';
import { getUser } from '@/api/auth';
import useAuthStore from '@/zustand/useAuthStore';

const commonLoader = async () => {
  const token = getTokenFromLocalStorage();
  if (isEmpty(token)) return null;

  const user = await getUser();
  if (isEmpty(user)) return null;

  const useStoreInstance = useAuthStore.getState();
  useStoreInstance.setUser(user);

  return null;
};

export default commonLoader;
