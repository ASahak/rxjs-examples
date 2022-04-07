import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';

export default () => {
    const clicks = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(
        buffer(clicks)
    );
    buffered.subscribe(console.log);
}
