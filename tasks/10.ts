import { reduce, takeWhile } from 'rxjs/operators';
import { primes$ } from '../creators/primes$';
import { solver } from '../solver';

const taskTen = (treshold: number) => primes$.pipe(
  takeWhile(prime => prime < treshold),
  reduce((sum, prime) => sum += prime)
);

solver(taskTen(10), 'Challenge ten example');
solver(taskTen(2000000), 'Challenge ten'); // not correct ???
