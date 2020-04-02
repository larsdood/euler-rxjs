import { pipe, UnaryFunction, Observable } from "rxjs";
import { switchMap, count } from "rxjs/operators";
import { factorsOfRepeatedDivision$ } from '../creators/factorsOfRepeatedDivison$';

export const divisibleCount = (): UnaryFunction<Observable<[number, number]>, Observable<number>> =>
  pipe(
    switchMap(([numerator, denominator]: [number, number]) => factorsOfRepeatedDivision$(numerator, denominator)),
    count()
  );
