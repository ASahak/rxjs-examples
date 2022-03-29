import { concat, range, interval } from 'rxjs';
import { take } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const timer = interval(1000).pipe(take(4))
    const sequence = range(1, 10);

    concat(timer, sequence)
        .subscribe(console.log)

    // EXAMPLE 2
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    concat(timer1, timer2, timer3)
        .subscribe(console.log)
}
