import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initState = {
  user: null,
  isLogin: false,
};

const useAuthStore = create(
  immer((set) => ({
    ...initState,
    setUser: (user) =>
      set((state) => {
        state.user = user;
        state.isLogin = true;
      }),
  })),
  {
    name: 'auth-storage',
  },
);

export default useAuthStore;
