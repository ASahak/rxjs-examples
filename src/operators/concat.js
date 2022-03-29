import { concat, range, interval } from 'rxjs';
import { take } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const timer = interval(1000).pipe(take(4))
    const sequence = range(1, 5);

    concat(timer, sequence)
        .subscribe(console.log)
    // Logs:
    // 0
    // 1
    // 2
    // 3
    // 1, 2, 3, 4, 5

    // EXAMPLE 2
    const timer1 = interval(1000).pipe(take(5));
    const timer2 = interval(2000).pipe(take(4));
    const timer3 = interval(500).pipe(take(3));

    concat(timer1, timer2, timer3)
        .subscribe(console.log)
    // Logs:
    // 0
    // 1
    // 2
    // 3
    // 4
    // 0
    // 1
    // 2
    // 3
    // 0
    // 1
    // 2
}
