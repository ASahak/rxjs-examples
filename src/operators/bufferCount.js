import { fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

export default () => {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(
        bufferCount(2)
    );
    buffered.subscribe(console.log);
}
