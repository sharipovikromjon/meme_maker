import { create } from 'zustand';

interface MemeState {
  image: string | null;
  topText: string;
  bottomText: string;
  setImage: (img: string) => void;
  setTopText: (text: string) => void;
  setBottomText: (text: string) => void;
}

export const useMemeStore = create<MemeState>((set) => ({
  image: null,
  topText: '',
  bottomText: '',
  setImage: (img) => set(() => ({ image: img })),
  setTopText: (text) => set(() => ({ topText: text })),
  setBottomText: (text) => set(() => ({ bottomText: text })),
}));
