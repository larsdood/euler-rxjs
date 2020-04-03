import { Observable, Observer } from 'rxjs';

let observedOddPrimes: number[] = [ 3 ];

export const primes$: Observable<number> = Observable.create(
  (observer: Observer<number>) => {
    let outIndex = 0;
    observer.next(2);
    outIndex++;
    observer.next(3);
    while(true) {
      if (observer.closed) {
        break;
      }
      outIndex++;
      if (outIndex <= observedOddPrimes.length - 1) {
        observer.next(observedOddPrimes[outIndex]);
      } else {
        let candidatePrime = observedOddPrimes[observedOddPrimes.length - 1] + 2;
        while(observedOddPrimes.some(observedPrime => candidatePrime % observedPrime === 0 )) {
          candidatePrime += 2;
        }
        observedOddPrimes.push(candidatePrime);
        observer.next(candidatePrime);
      }
    }
  }
)