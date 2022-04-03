import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

export default () => {
    const click$ = fromEvent(document, 'click');

    click$.pipe(
        auditTime(1000)
    ).subscribe(console.log)
}
