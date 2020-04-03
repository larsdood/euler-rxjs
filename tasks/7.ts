import { skip, take } from 'rxjs/operators';
import { primes$ } from '../creators/primes$';
import { solver } from '../solver';

const taskSeven = (primeIndex: number) => primes$.pipe(
  skip(primeIndex - 1),
  take(1)
  );


solver(taskSeven(6), 'Challenge 7 example');
// somethings not right here???
solver(taskSeven(10001 - 1), 'Challenge 7');