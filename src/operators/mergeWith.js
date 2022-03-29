import { interval } from 'rxjs';
import { mergeWith, take, map } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const first = interval(2000).pipe(take(4));
    const second = interval(1000).pipe(take(4));

    first.pipe(mergeWith(second))
        .subscribe(console.log)
    // Logs:
    // 0
    // 1
    // 0
    // 2
    // 1
    // 3
    // 2
    // 3

    // EXAMPLE 2
    const first$ = interval(2500).pipe(take(1));
    const second$ = interval(2000).pipe(take(1));
    const third$ = interval(1500).pipe(take(1));
    const fourth$ = interval(1000).pipe(take(1));

    first$.pipe(
        map(() => 'FIRST!'),
        mergeWith(
            second$.pipe(map(() => 'SECOND!')),
            third$.pipe(map(() => 'THIRD!')),
            fourth$.pipe(map(() => 'FOURTH!'))
        )
    ).subscribe(console.log)
    // Logs:
    // FOURTH!
    // THIRD!
    // Second!
    // FIRST!
}
