import { of } from 'rxjs';
import { skipLast } from 'rxjs/operators';

export default () => {
    const numbers = of(1, 2, 3, 4, 5);
    numbers.pipe(
        skipLast(2)
    ).subscribe(console.log);
    // Logs:
    // 1
    // 2
    // 3
}
