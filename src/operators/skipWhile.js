import { from } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const source1$ = from(['Green Arrow', 'SuperMan', 'Flash', 'SuperGirl', 'Black Canary'])

    source1$.pipe(
        skipWhile(v => v !== 'SuperGirl')
    ).subscribe(console.log)
    // Logs:
    // SuperGirl
    // Black Canary

    // EXAMPLE 2
    const source2$ = from([1, 2, 3, 4, 5, 6, 7, 9, 10]);
    source2$.pipe(
        skipWhile((_, i) => i !== 5)
    ).subscribe(console.log);
    // Logs:
    // Skip value from the array until index 5
    // 6, 7, 9, 10
}
