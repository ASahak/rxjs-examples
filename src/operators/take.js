import { interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe(x => console.log(x));

    // Logs:
    // 0
    // 1
    // 2
    // 3
    // 4

    // EXAMPLE 2
    const source = of(1, 2, 3, 4, 5);
    source.pipe(
        take(1)
    ).subscribe(console.log)
    // Logs:
    // 1
}
