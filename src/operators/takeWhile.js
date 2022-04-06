import { fromEvent, of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const clicks = fromEvent(document, 'click');
    clicks.pipe(
        takeWhile(ev => ev.clientX > 200)
    ).subscribe(console.log)

    // EXAMPLE 2
    const source$ = of(1, 2, 3, 4, 5);
    source$
        .pipe(
            takeWhile(val => val <= 4)
        ).subscribe(val => console.log(val));
    // Logs:
    // 1,2,3,4
}
