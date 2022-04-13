import { timer, interval } from 'rxjs';
import { window, mergeAll, scan } from 'rxjs/operators';

export default () => {
    const source = timer(0, 1000);
    const example = source.pipe(
        window(interval(3000))
    );
    const count = example.pipe(
        scan((acc, curr) => acc + 1, 0)
    );
    count.subscribe(val => console.log(`Window ${val}:`));
    example
        .pipe(mergeAll())
        .subscribe(val => console.log(val));
    // Logs:
    // Window 1:
    // 0
    // 1
    // 2
    // Window 2:
    // 3
    // 4
    // 5
    // ...
}
