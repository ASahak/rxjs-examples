import { fromEvent, interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

export default () => {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(
        bufferWhen(() =>
            interval(4000)
        )
    );
    buffered.subscribe(console.log);
}
