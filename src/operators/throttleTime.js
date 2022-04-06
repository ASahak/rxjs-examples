import { fromEvent, interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const clicks = fromEvent(document, 'click');
    clicks.pipe(
        throttleTime(1000)
    ).subscribe(console.log)

    // EXAMPLE 2
    const source1$ = interval(1000);
    source1$
        .pipe(
            throttleTime(5000)
        ).subscribe(val => console.log(val));
    // Logs:
    // 0...6...12
}
