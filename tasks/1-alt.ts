import { generate, Observable, merge } from 'rxjs';
import { reduce } from 'rxjs/operators'
import { solver } from '../solver';

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

solver(taskOneAlt(10), 'Challenge 1 alt example');
solver(taskOneAlt(1000), 'Challenge 1 alt');
solver(taskOneAlt(10000000), 'Challenge 1 alt big');