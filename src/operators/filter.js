import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

export default () => {
    const source$ = from([1, 2, 3, 4, 5, 6]);

    source$.pipe(
        filter(v => v % 2 === 0)
    ).subscribe(console.log)
    // Logs:
    // 2
    // 4
    // 6
}
