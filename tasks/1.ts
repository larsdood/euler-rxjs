import { range } from 'rxjs';
import { filter, reduce } from 'rxjs/operators'

const taskOne = (maxNumber: number) => range(1, maxNumber - 1).pipe(
  filter(val => val % 3 === 0 || val % 5 === 0),
  reduce((acc, val: number) => acc + val),
);

taskOne(10).subscribe(val => console.log('example:', val));
taskOne(1000).subscribe(val => console.log('solution:', val));
