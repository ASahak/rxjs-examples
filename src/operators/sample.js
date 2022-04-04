import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

export default () => {
    const seconds = interval(1000);
    const clicks = fromEvent(document, 'click');

    seconds.pipe(
        sample(clicks)
    ).subscribe(console.log)
    // Logs:
    // emit the last second value after click
}
