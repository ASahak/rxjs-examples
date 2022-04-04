import { from } from 'rxjs';
import { last } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    from([1, 2, 3, 4]).pipe(
        last()
    ).subscribe(console.log)
    // Logs:
    // 4


    // EXAMPLE 2
    from([1, 2, 3, 4]).pipe(
        last(v => v === 5, 'not exits')
    ).subscribe(console.log)
    // Logs:
    // not exits
}
