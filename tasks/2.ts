import { fibonacci$ } from '../creators/fibonacci$'
import { filter, reduce, takeWhile } from 'rxjs/operators';
import { solver } from '../solver';

const taskTwo = (maxFibonacciValue: number) =>
  fibonacci$.pipe(
    takeWhile(fib => fib <= maxFibonacciValue),
    filter(fib => fib % 2 === 0),
    reduce((sum, fib) => sum + fib)
  );

solver(taskTwo(4000000), 'Challenge 2');
