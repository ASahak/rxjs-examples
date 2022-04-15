import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const clicks$1 = fromEvent(document, 'click');
    const delayedClicks$1 = clicks$1.pipe(delay(1000)); // each click emitted after 1 second
    delayedClicks$1.subscribe(x => console.log(x));

    // EXAMPLE 2
    const clicks$2 = fromEvent(document, 'click');
    const date = new Date('March 15, 2050 12:00:00'); // in the future
    const delayedClicks$2 = clicks$2.pipe(delay(date)); // click emitted only after that date
    delayedClicks$2.subscribe(x => console.log(x));
}
