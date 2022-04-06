import { interval, fromEvent, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const source1$ = interval(1000);
    const timer$ = timer(5000);
    source1$.pipe(
        takeUntil(timer$)
    ).subscribe(console.log);
    // Logs:
    // 0
    // 1
    // 2
    // 3

    // EXAMPLE 2
    const source2$ = interval(1000);
    const clicks = fromEvent(document, 'click');
    source2$.pipe(
        takeUntil(clicks)
    ).subscribe(console.log)
}
