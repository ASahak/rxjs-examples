import { fromEvent } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

export default () => {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(
        bufferTime(2000)
    );
    buffered.subscribe(console.log);
}
