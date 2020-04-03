import { range } from "rxjs";
import { primeFactorsDict } from '../operators/primeFactorsDict';
import { map } from "rxjs/operators";
import { solver } from "../solver";

const taskFive = (rangeMax: number) => range(1, rangeMax).pipe(
  primeFactorsDict(),
  map(( countMap ) =>  Object.entries(countMap)
    .reduce(
      (product, [key, value]) => product *= (Number(key) ** value), 1)),
);

solver(taskFive(20), 'Challenge 4 example');
