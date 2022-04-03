import { fromEvent } from 'rxjs';
import { elementAt } from 'rxjs/operators';

export default () => {
    const click$ = fromEvent(document, 'click');

    click$.pipe(
        elementAt(2)
    ).subscribe(console.log)
    // Logs:
    // Emit only the third click event
}
