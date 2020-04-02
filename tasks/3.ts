import { of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { primeFactors } from '../operators/primeFactors';
import { primes$ } from '../creators/primes$';

primes$.pipe(
  take(10)
).subscribe(
  val => console.log(val)
)

const taskThree = (product: number) => of(product).pipe(
  primeFactors(),
  map(primeFactors => primeFactors.reverse()[0])
)

of(13195).pipe(
  primeFactors()
).subscribe(val => console.log('testResult:', val));

taskThree(600851475143).subscribe(val => console.log('solution:', val));
