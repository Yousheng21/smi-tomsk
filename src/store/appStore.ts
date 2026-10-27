import { create } from 'zustand';

interface AppState {
  isVisibleMenu: boolean;

  setMenuVisible: (arg: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isVisibleMenu: false,
  setMenuVisible(flag) {
    set({ isVisibleMenu: flag });
  },
}));
