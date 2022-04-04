import { interval, fromEvent } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

export default () => {
    const seconds = interval(1000);
    const clicks$ = fromEvent(document, 'click');

    seconds.pipe(
        skipUntil(clicks$)
    ).subscribe(console.log)
    // Logs:
    // emit interval value after click event
}
