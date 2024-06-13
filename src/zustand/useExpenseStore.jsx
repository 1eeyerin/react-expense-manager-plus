import dayjs from 'dayjs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const initState = {
  selectedMonth: dayjs().month() + 1,
};

const useExpenseStore = create(
  persist(
    immer((set) => ({
      ...initState,
      updateSelectedMonth: (selectedMonth) =>
        set((state) => {
          state.selectedMonth = selectedMonth;
        }),
    })),
    {
      name: 'expense-storage',
    },
  ),
);

export default useExpenseStore;
