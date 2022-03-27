import { of } from 'rxjs';
import { map, combineLatestAll } from 'rxjs/operators';

export default () => {
    const source1$ = of(1, 2, 3).pipe(
        map(v1 =>
            of('a', 'b', 'c', 'd', 'e').pipe(
                map(v2 => v1 + ' - ' + v2)
            )
        ),
        combineLatestAll()
    );

    source1$.subscribe(console.log);
    // Output
    // ["1 - e", "2 - e", "3 - a"]
    // ["1 - e", "2 - e", "3 - b"]
    // ["1 - e", "2 - e", "3 - c"]
    // ["1 - e", "2 - e", "3 - d"]
    // ["1 - e", "2 - e", "3 - e"]
}
