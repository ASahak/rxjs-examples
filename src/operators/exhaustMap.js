import { interval, merge, of } from 'rxjs';
import { delay, take, exhaustMap } from 'rxjs/operators';

export default () => {

    const sourceInterval = interval(1000);
    const delayedInterval = sourceInterval.pipe(delay(10), take(4));

    merge(
        delayedInterval,
        of(true)
    )
    .pipe(exhaustMap(_ => sourceInterval.pipe(take(5))))

    // output: 0, 1, 2, 3, 4
    .subscribe(val => console.log(val));
}
