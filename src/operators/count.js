import { range, fromEvent, interval } from 'rxjs';
import { count, takeUntil } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const seconds = interval(1000);
    const clicks = fromEvent(document, 'click');
    const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
    secondsBeforeClick.pipe(count()).subscribe(x => console.log(x));

    // EXAMPLE 2
    const numbers = range(1, 7);
    const result = numbers.pipe(count(i => i % 2 === 1));
    result.subscribe(x => console.log(x));
    // Results in:
    // 4
}
