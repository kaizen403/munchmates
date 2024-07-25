import { atom } from "recoil";

export const userNameState = atom<string>({
  key: "userNameState",
  default: "",
});

export const userEmailState = atom<string>({
  key: "userEmailState",
  default: "",
});

export const userPasswordState = atom<string>({
  key: "userPasswordState",
  default: "",
});

export const userAgeState = atom<number>({
  key: "userAgeState",
  default: 18,
});

export const userGenderState = atom<"Male" | "Female" | "Other">({
  key: "userGenderState",
  default: "Male",
});

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
