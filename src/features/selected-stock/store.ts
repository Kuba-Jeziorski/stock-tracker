import { BehaviorSubject } from "rxjs";

export const createSelectedStore = () => {
  const selectedStock$ = new BehaviorSubject(null);
};
