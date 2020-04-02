import { UnaryFunction, pipe, Observable } from 'rxjs';
import { filter, map, reduce, takeWhile, flatMap, count } from 'rxjs/operators';
import { primes$ } from '../creators/primes$';
import { factorsOfRepeatedDivision$ } from '../creators/factorsOfRepeatedDivison$';

interface PrimeFactorsCountDict {
  [prime: number]: number
}

export const primeFactorsDict = (): UnaryFunction<Observable<number>, Observable<PrimeFactorsCountDict>> =>
  pipe(
    flatMap((product: number) => primes$.pipe(
      takeWhile(prime => prime <= product),
      filter(prime => product % prime === 0),
      flatMap(prime => factorsOfRepeatedDivision$(product, prime).pipe(
        count(),
        map((count: number) => [prime, count] as [number, number])
      )),
    )),
    reduce((primeFactorCountDict: PrimeFactorsCountDict, [prime, count]: [number, number]) => ({
      ...primeFactorCountDict,
      [prime]: primeFactorCountDict[prime] ? Math.max(primeFactorCountDict[prime], count) : count
    }), {} as PrimeFactorsCountDict),
  );
