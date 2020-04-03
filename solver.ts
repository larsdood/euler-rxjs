import { Observable, UnaryFunction, pipe } from "rxjs";
import { map, share } from 'rxjs/operators';
import { select } from 'proxjs';

function solveOperator<T>(): UnaryFunction<Observable<T>, Observable<[T, number]>> {
  let start = Date.now();
  return pipe(
    map((result: T) => [result, Date.now() - start])
  )
}

export const solver = (solvePipe: Observable<any>, name: string): void => {
  solvePipe = solvePipe.pipe(share());
  const [ solution, solutionTime ] = select(solvePipe.pipe(
    solveOperator()
  ));

  console.log(
    `${name}: ${solution}, solved in: ${solutionTime} ms`
  )
}