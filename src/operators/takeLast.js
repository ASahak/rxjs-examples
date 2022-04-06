import { range, of } from 'rxjs';
import { takeLast } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const many = range(1, 100);
    const lastThree = many.pipe(takeLast(3));
    lastThree.subscribe(console.log)
    // Logs:
    // 98
    // 99
    // 100

    // EXAMPLE 2
    const source = of('Ignore', 'Ignore', 'Hello', 'World!');
    source.pipe(
        takeLast(2)
    ).subscribe(console.log);
    // Logs:
    // Hello
    // World!
}
