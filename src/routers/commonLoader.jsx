import { redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { getTokenFromLocalStorage } from '@/utils';
import { getUser } from '@/api/auth';
import useAuthStore from '@/zustand/useAuthStore';

const commonLoader = async () => {
  const token = getTokenFromLocalStorage();
  if (isEmpty(token)) {
    return redirect('/signin');
  }

  try {
    const user = await getUser();
    if (isEmpty(user)) {
      return redirect('/signin');
    }
    const useStoreInstance = useAuthStore.getState();
    useStoreInstance.setUser(user);
  } catch (error) {
    return redirect('/signin');
  }

  return null;
};

export default commonLoader;
