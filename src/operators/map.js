import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export default () => {
    const source = from([1, 2, 3, 4, 5]);

    source.pipe(
        map(val => val + 10)
    ).subscribe(console.log);
    // Logs:
    // 11
    // 12
    // 13
    // 14
    // 15
}
