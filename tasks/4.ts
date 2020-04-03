import { range, Observable } from 'rxjs';
import { flatMap, filter, map, take, reduce } from 'rxjs/operators';
import { solver } from '../solver';

const from999To100$ = range(1, 900).pipe(
  map(count => 1000 - count)
);

const from99To10$ = range(1, 90).pipe(
  map(count => 100 - count)
);

const taskFour = (counterPipe: Observable<number>) => counterPipe.pipe(
  flatMap(outerCount => counterPipe.pipe(
    filter(innerCount => innerCount <= outerCount),
    map(innerCount => innerCount * outerCount),
    filter((product) => product.toString() === product.toString().split('').reverse().join('')),
    take(1),
    )
  ),
  map(Number),
  reduce(Math.max, 0)  
)

solver(taskFour(from99To10$), 'Challenge 4 example');
solver(taskFour(from999To100$), 'Challenge 4');
