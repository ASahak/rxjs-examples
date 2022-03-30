import { of, delay, fromEvent } from 'rxjs';
import { zipWith, map } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const first = of('FIRST!');
    const second = of('SECOND!');
    const third = of('THIRD!');

    first.pipe(
        zipWith(
            second.pipe(delay(2000)),
            third.pipe(delay(3000)),
        )
    ).subscribe(console.log)
    // Logs:
    // ['FIRST!', 'SECOND!', 'THIRD!'] after 3s

    // EXAMPLE 2
    const eventTime = eventName => fromEvent(document, eventName).pipe(map(_ => new Date()));

    const documentMouseDown = eventTime('mousedown');
    const documentMouseUp = eventTime('mouseup');

    documentMouseDown.pipe(
        zipWith(
            documentMouseUp
        ),
        map(([start, end]) =>  Math.abs(start.getTime() - end.getTime()))
    ).subscribe(console.log)
    // Logs:
    // Show the differ time between mouseDown and mouseUp
}
