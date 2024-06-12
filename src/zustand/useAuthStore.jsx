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
        state.user = { ...state.user, ...user };
        state.isLogin = true;
      }),
    logout: () =>
      set((state) => {
        state.user = null;
        state.isLogin = false;
      }),
  })),
  {
    name: 'auth-storage',
  },
);

export default useAuthStore;
