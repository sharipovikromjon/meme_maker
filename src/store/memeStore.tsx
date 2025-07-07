import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

interface MemeState {
  image: string | null;
  topText: string;
  bottomText: string;
  setImage: (img: string) => void;
  setTopText: (text: string) => void;
  setBottomText: (text: string) => void;
}

export const useMemeStore = create(
  devtools<MemeState>((set) => ({
    image: null,
    topText: "",
    bottomText: "",
    setImage: (img: null | string) => set(() => ({ image: img })),
    setTopText: (text) => set(() => ({ topText: text })),
    setBottomText: (text) => set(() => ({ bottomText: text })),
  }))
);
