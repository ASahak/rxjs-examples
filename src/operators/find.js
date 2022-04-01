import { of } from 'rxjs';
import { find } from 'rxjs/operators';

export default () => {
    const source = of(1, 2, 3, 4, 5, 6);

    source.pipe(
        find(v => v % 2 === 0)
    ).subscribe(console.log)
    // Logs:
    // 2
}
