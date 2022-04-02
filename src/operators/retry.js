import { of, interval, throwError } from 'rxjs';
import { retry, mergeMap, retryWhen } from 'rxjs/operators';

export default () => {
    const source = interval(1000);

    source.pipe(
        mergeMap(
            v => {
                if (v > 2) return throwError('Error')
                return of(v)
            }
        ),
        retry(1),
    ).subscribe({
        next: v => console.log(v),
        error: err => console.log('Field-', err),
    })
    // Logs:
    // 0
    // 1
    // 2
    // 0
    // 1
    // 2
    // Field- Error
}
