import { fromEvent, interval } from 'rxjs';
import { debounce, scan } from 'rxjs/operators';

export default () => {
    const click$ = fromEvent(document, 'click');

    click$.pipe(
        scan(v => ++v, 1),
        debounce(() => interval(200))
    ).subscribe(console.log)
}
