import { of, interval, race } from 'rxjs';
import { take, map, delay, catchError } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    race(
        interval(1000).pipe(take(1), map(_ => 'Medium')),
        interval(2000).pipe(take(1), map(_ => 'Last')),
        interval(100).pipe(take(1), map(_ => 'First')),
    ).subscribe(console.log)
    // Logs:
    // First

    // EXAMPLE 2
    const first = of('first').pipe(
        delay(500),
        map(_ => {
            throw 'Error'
        }),
        catchError(err => of(err))
    );
    const second = of('second').pipe(
        delay(1000),
    );
    const third = of('third').pipe(
        delay(1500),
    );
    race(first, second, third).subscribe(console.log)
    // Logs:
    // Error
}
