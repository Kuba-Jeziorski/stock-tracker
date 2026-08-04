import { BehaviorSubject, debounceTime, distinctUntilChanged, map } from "rxjs";

export const createSearchStore = () => {
  const input$ = new BehaviorSubject<string>("");

  const searchInput$ = input$.pipe(
    debounceTime(300),
    map((value) => (value.trim().length > 2 ? value : "")),
    distinctUntilChanged(),
  );

  const searchInput = (value: string) => input$.next(value);

  return { input$, searchInput$, searchInput };
};
