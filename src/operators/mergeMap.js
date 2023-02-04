import { of, interval } from 'rxjs';
import { mergeMap, delay, map } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const source = of(2000, 1000);
    source.pipe(
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    ).subscribe(console.log)
    // Logs:
    // Delayed by: 1000ms
    // Delayed by: 2000ms

    // EXAMPLE 2
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
        mergeMap(x => interval(1000).pipe(map(i => x + i))),
    );
    result.subscribe(console.log);

    // Logs:
    // a0
    // b0
    // c0
    // a1
    // b1
    // c1
    // ...
}
