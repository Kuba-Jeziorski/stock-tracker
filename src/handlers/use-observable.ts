import { useEffect, useState } from "react";
import type { Observable } from "rxjs";

// subscription
export const useObservable = <T>(observable$: Observable<T>, initial?: T) => {
  const [value, setValue] = useState<T | undefined>(initial);

  useEffect(() => {
    const sub = observable$.subscribe(setValue);

    return () => sub.unsubscribe();
  }, [observable$]);

  return value;
};
