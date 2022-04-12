import { of } from 'rxjs';
import { expand, take } from 'rxjs/operators';

export default () => {
    const source = of(2);
    source.pipe(
        //recursively call supplied function
        expand(val => {
            return of(1 + val);
        }),
        take(5)
    ).subscribe(console.log);
    // Logs:
    // 2
    // 3
    // 4
    // 5
    // 6
}
