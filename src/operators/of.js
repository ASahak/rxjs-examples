import { of } from 'rxjs'

export default () => {
    // EXAMPLE 1
    const result1$ = of([10, 20, 30]);

    result1$.subscribe(console.log);
    // Logs:
    // [10, 20, 30]

    // EXAMPLE 2
    const result2$ = of('Hello');

    result2$.subscribe(console.log);
    // Logs:
    // Hello

    // EXAMPLE 3
    const result3$ = of('Hello', 10, 20);

    result3$.subscribe(console.log);
    // Logs:
    // Hello
    // 10
    // 20
}
