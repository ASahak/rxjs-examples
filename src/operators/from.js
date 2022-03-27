import { from } from 'rxjs';
import { take } from 'rxjs/operators';

export default () => {
    const result1 = from([1, 2, 3]);

    result1.subscribe(console.log)
    // Logs:
    // 10
    // 20
    // 30


    // EXAMPLE 2

    function * generateDoubles(seed) {
        let i = seed;
        while (true) {
            yield i;
            i *= 2;
        }
    }

    const iterator = generateDoubles(3);

    const result2 = from(iterator).pipe(take(10));
    result2.subscribe(console.log)
    // Logs:
    // 3
    // 6
    // 12
    // 24
    // 48
    // 96
    // 192
    // 384
    // 768
    // 1536
}
