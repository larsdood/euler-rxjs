import { Observable, generate } from "rxjs";

export const factorsOfRepeatedDivision$ = (numerator: number, denominator: number): Observable<number> => generate(
  numerator,
  numerator => numerator % denominator === 0,
  numerator => numerator / denominator,
  numerator => numerator / denominator
);