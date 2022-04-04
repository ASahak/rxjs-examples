import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const clicks1$ = fromEvent(document, 'click');

    clicks1$.pipe(
        first()
    ).subscribe(console.log)
    // Logs:
    // emit only first click event

    // EXAMPLE 2
    const clicks2$ = fromEvent(document, 'click');

    clicks2$.pipe(
        first(e => e.target.tagName === 'DIV')
    ).subscribe(console.log)
    // Logs:
    // emit only once clicking on div tag
}
