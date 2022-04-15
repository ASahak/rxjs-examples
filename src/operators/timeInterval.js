import { fromEvent } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';

export default () => {

    fromEvent(document, 'mousedown')
    .pipe(timeInterval(), tap(console.log))
    .subscribe(
        i => (document.body.innerText = `milliseconds since last click: ${i.interval}`)
    )
}
