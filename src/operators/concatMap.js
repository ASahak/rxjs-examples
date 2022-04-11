import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

export default () => {
    const source = of(2000, 1000);
    source.pipe(
        concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    ).subscribe(console.log)
    // Logs:
    // Delayed by: 2000ms
    // Delayed by: 1000ms
}
