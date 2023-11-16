import { atom } from "recoil";
import { IGoal } from "./components/views/BoxTwo";

export const goalState = atom<IGoal>({
  key: "goal",
  default: <IGoal>{},
});
