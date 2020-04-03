import { range } from 'rxjs';
import { filter, reduce } from 'rxjs/operators'
import { solver } from '../solver';

const taskOne = (maxNumber: number) => range(1, maxNumber - 1).pipe(
  filter(val => val % 3 === 0 || val % 5 === 0),
  reduce((acc, val: number) => acc + val),
);

solver(taskOne(10), 'Challenge 1 example');
solver(taskOne(1000), 'Challenge 1');
solver(taskOne(10000000), 'Challenge 1 big');