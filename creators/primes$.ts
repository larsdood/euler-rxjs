import { Observable, Observer } from 'rxjs';

let observedOddPrimes: number[] = [ 3 ];

export const primes$: Observable<number> = Observable.create(
  (observer: Observer<number>) => {
    observer.next(2);
    let outOddIndex = 0;
    observer.next(3);
    while(true) {
      if (observer.closed) {
        break;
      }
      outOddIndex++;
      if (outOddIndex <= observedOddPrimes.length - 1) {
        observer.next(observedOddPrimes[outOddIndex]);
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