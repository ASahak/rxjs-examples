import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

export default () => {
    const source = interval(1000);
    const example = source.pipe(
        take(10),
        toArray()
    );

    example.subscribe(val => console.log(val));
    // Logs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}
