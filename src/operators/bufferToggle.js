import { fromEvent, interval, EMPTY } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

export default () => {
    const clicks = fromEvent(document, 'click');
    const openings = interval(1000);
    const buffered = clicks.pipe(
        bufferToggle(openings, i => i % 2 ? interval(500) : EMPTY)
    );
    buffered.subscribe(console.log);
}
