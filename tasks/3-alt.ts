import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { primeFactorsImproved } from '../operators/primeFactors';
import { solver } from '../solver';

const taskThree = (product: number) => of(product).pipe(
  primeFactorsImproved(),
  map(primeFactors => primeFactors.reverse()[0])
)

solver(taskThree(600851475143), "Challenge 3 alt");