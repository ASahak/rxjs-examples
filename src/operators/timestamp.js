import { fromEvent } from 'rxjs';
import { timestamp } from 'rxjs/operators';

export default () => {
    const clickWithTimestamp = fromEvent(document, 'click').pipe(
        timestamp()
    );

    // Emits data of type {value: MouseEvent, timestamp: number}
    clickWithTimestamp.subscribe(data => {
        console.log(data);
    });
}
