import { empty, interval, of } from 'rxjs';
import { mergeMap, startWith } from 'rxjs/operators';

export default () => {

    // EXAMPLE 1
    const interval$ = interval(1000);
    const result1 = interval$.pipe(
        mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : empty()),
    );
    result1.subscribe(x => console.log(x));
    // Logs:
    // a
    // b
    // c

    // EXAMPLE 2
    const result2 = empty().pipe(startWith(7));
    result2.subscribe(x => console.log(x));
    // Logs:
    // 7
}


