import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { primeFactors } from '../operators/primeFactors';
import { solver } from '../solver';

const taskThree = (product: number) => of(product).pipe(
  primeFactors(),
  map(primeFactors => primeFactors.reverse()[0])
)

of(13195).pipe(
  primeFactors()
).subscribe(val => console.log('testResult:', val));

solver(taskThree(600851475143), "Challenge 3");