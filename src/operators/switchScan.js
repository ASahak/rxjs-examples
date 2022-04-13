import { of, interval } from 'rxjs';
import { switchScan } from 'rxjs/operators';

export default () => {
    const source = interval(500);
    source.pipe(
        switchScan((acc, num) => of([...acc, num]), [])
    ).subscribe(console.log)
    // Logs:
    // [0]
    // [0, 1]
    // [0, 1, 2]
    // ....
}
