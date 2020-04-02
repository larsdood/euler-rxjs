import { Observable, Observer } from 'rxjs';

export const primes$: Observable<number> = Observable.create(
  (observer: Observer<number>) => {
    const observedOddPrimes: number[] = [];
    observer.next(2);
    let candidatePrime = 3;
    while(true) {
      observer.next(candidatePrime);
      if (observer.closed) {
        break;
      }
      observedOddPrimes.push(candidatePrime);
      candidatePrime += 2;
      while(observedOddPrimes.some(observedPrime => candidatePrime % observedPrime === 0 )) {
        candidatePrime += 2;
      }
    }
  }
)