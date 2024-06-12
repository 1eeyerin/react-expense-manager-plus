import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const initState = {
  user: null,
  isLogin: false,
};

const useAuthStore = create(
  persist(
    immer((set, get) => ({
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
  ),
);

export default useAuthStore;
