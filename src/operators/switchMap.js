import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export default () => {
    fromEvent(document, 'click')
    .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
    )
    .subscribe(console.log);
}
