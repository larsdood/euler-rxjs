import { UnaryFunction, pipe, Observable } from 'rxjs';
import { filter, map, reduce, switchMap, takeWhile } from 'rxjs/operators';
import { primes$ } from '../creators/primes$';

export const primeFactors = (): UnaryFunction<Observable<number>, Observable<number[]>> =>
  pipe(
    switchMap((product: number) => primes$.pipe(
      takeWhile(prime => prime <= Math.sqrt(product)),
      filter(prime => product % prime === 0),
      reduce((accumulatedFactors: number[], primeFactor: number) => [...accumulatedFactors, primeFactor], [] as number[])
    )),
    map(val => val as number[])
  );
