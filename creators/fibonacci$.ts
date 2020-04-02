import { Observable, Observer } from 'rxjs';

export const fibonacci$: Observable<number> = Observable.create(
  (observer: Observer<number>) => {
    let prev = 0;
    let curr = 1;
    while(true) {
      if (observer.closed) {
        break;
      }
      const temp = prev;
      prev = curr;
      observer.next(curr += temp)
    }
  }
);
