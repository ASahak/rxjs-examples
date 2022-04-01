import { of } from 'rxjs';
import { findIndex } from 'rxjs/operators';

export default () => {
    const source = of(1, 2, 3, 4, 5, 6);

    source.pipe(
        findIndex(v => v === 3)
    ).subscribe(console.log)
    // Logs:
    // 2
}
