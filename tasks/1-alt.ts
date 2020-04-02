import { generate, Observable, merge } from 'rxjs';
import { reduce } from 'rxjs/operators'

const fives$ = (max: number): Observable<number> => generate(
  5,
  val => val < max,
  val => val + 5,
);

const threes$ = (max: number): Observable<number> => generate(
  3,
  val => val < max,
  val => (val += 3) % 5 === 0 ? val + 3 : val,
);

const taskOneAlt = (maxNumber: number) => merge(
  fives$(maxNumber),
  threes$(maxNumber)
  ).pipe(
    reduce((acc, val: number) => acc + val)
);

taskOneAlt(10).subscribe(val => console.log('alt example:', val));
taskOneAlt(1000).subscribe(val => console.log('alt solution:', val));