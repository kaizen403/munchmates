import { atom } from "recoil";

export const interestsState = atom<{ id: number; name: string }[]>({
  key: "interestsState",
  default: [],
});

export const selectedInterestsState = atom<Set<number>>({
  key: "selectedInterestsState",
  default: new Set<number>(),
});

export const loadedInterestsState = atom<number>({
  key: "loadedInterestsState",
  default: 0,
});

export const totalInterestsState = atom<number>({
  key: "totalInterestsState",
  default: 0,
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});
