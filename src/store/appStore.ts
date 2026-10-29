import { create } from 'zustand';

interface AppState {
  isVisibleMenu: boolean;
  filter: number;
  setMenuVisible: (arg: boolean) => void;
  setFilter: (arg: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isVisibleMenu: false,
  filter: 1,
  setMenuVisible(flag) {
    set({ isVisibleMenu: flag });
  },
  setFilter(flag: number) {
    set({ filter: flag });
  },
}));
