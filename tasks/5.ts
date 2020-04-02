import { range } from "rxjs";
import { primeFactorsDict } from '../operators/primeFactorsDict';
import { map } from "rxjs/operators";

const taskFive = (rangeMax: number) => range(1, rangeMax).pipe(
  primeFactorsDict(),
  map(( countMap ) =>  Object.entries(countMap)
    .reduce(
      (product, [key, value]) => product *= (Number(key) ** value), 1)),
);

taskFive(20).subscribe(val => console.log(val));