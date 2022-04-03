import { fromEvent } from 'rxjs';
import { debounceTime, scan } from 'rxjs/operators';

export default () => {
    const click$ = fromEvent(document, 'click');

    click$.pipe(
        scan(v => ++v, 1),
        debounceTime(200)
    ).subscribe(console.log)
}
