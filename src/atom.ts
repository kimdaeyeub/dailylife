import { atom } from "recoil";
import { IGoal } from "./components/views/BoxTwo";

export const refetch = atom<boolean>({
  key: "refetch",
  default: false,
});

export const goalState = atom<IGoal>({
  key: "goal",
  default: <IGoal>{},
});

export const goalsState = atom<IGoal[]>({
  key: "goals",
  default: <IGoal[]>[],
});
