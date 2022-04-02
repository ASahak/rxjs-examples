import { fromEvent, interval } from 'rxjs';
import { audit } from 'rxjs/operators';

export default () => {
    const click$ = fromEvent(document, 'click');

    click$.pipe(
        audit(_ => interval(1000))
    ).subscribe(console.log)
}
