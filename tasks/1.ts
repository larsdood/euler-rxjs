import { generate, Observable, range, merge } from 'rxjs';
import { filter, reduce } from 'rxjs/operators'

const taskOne = (maxNumber: number) => range(1, maxNumber - 1).pipe(
  filter(val => val % 3 === 0 || val % 5 === 0),
  reduce((acc, val: number) => acc + val),
);

taskOne(10).subscribe(val => console.log('example:', val));
taskOne(1000).subscribe(val => console.log('solution:', val));

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

taskOneAlt(1000).subscribe(val => console.log('alt solution:', val));