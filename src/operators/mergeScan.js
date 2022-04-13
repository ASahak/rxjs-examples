import { fromEvent, interval } from 'rxjs';
import { mergeScan, takeUntil, map, scan } from 'rxjs/operators';

export default () => {
    const mouseDown$ = fromEvent(document, 'mousedown');
    const mouseUp$ = fromEvent(document, 'mouseup');

    // accumulate time mouse held down over time
    mouseDown$
    .pipe(
        mergeScan((acc, curr) => {
            return interval(1000).pipe(
                scan((a, _) => ++a, 0),
                map((val) => val + acc),
                takeUntil(mouseUp$)
            );
        }, 0)
    ).subscribe(val => console.log(`${val}s`));
}
