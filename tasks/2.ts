import { fibonacci$ } from '../creators/fibonacci$'
import { filter, reduce, takeWhile } from 'rxjs/operators';

const taskTwo = (maxFibonacciValue: number) =>
  fibonacci$.pipe(
    takeWhile(fib => fib <= maxFibonacciValue),
    filter(fib => fib % 2 === 0),
    reduce((sum, fib) => sum + fib)
  )

taskTwo(4000000).subscribe(val => console.log(val));
