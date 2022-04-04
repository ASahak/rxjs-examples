import { fromEvent } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

export default () => {
    const clicks = fromEvent(document, 'click');

    clicks.pipe(
        sampleTime(1000)
    ).subscribe(console.log)
    // Logs:
    // emit event value after 1000ms
}
