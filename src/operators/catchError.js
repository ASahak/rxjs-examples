import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export default () => {
    of(1, 2, 3, 4).pipe(
        map(v => {
            if (v === 4) throw 'Error'
            return v;
        }),
        catchError(err => of(err))
    ).subscribe(console.log)
    // Logs:
    // 1
    // 2
    // 3
    // Error
}
