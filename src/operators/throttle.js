import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const clicks = fromEvent(document, 'click');
    clicks.pipe(
        throttle(_val => interval(1000))
    ).subscribe(console.log)

    // EXAMPLE 2
    const source1$ = interval(1000);
    source1$
        .pipe(
            throttle(_val => interval(2000))
        ).subscribe(val => console.log(val));
    // Logs:
    // 0...3...6...9
}
