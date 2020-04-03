import { range, zip } from "rxjs";
import { map, reduce } from 'rxjs/operators';
import { solver } from "../solver";



const sumOfSquares$ = (max: number) => range(1, max).pipe(
  map(val => val * val),
  reduce((sum, val) => sum += val)
);

const squareOfSums$ = (max: number) => range(1, max).pipe(
  reduce((sum, val) => sum += val),
  map(val => val * val)
);

const taskSix = (max: number) => zip(
    sumOfSquares$(max),
    squareOfSums$(max) 
).pipe(
  map(([sumOfSq, sqOfSums]) => Math.abs(sumOfSq - sqOfSums))
)

solver(taskSix(10), 'Challenge 6 example');
solver(taskSix(100), 'Challenge 6');