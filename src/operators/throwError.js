import { throwError } from 'rxjs';

export default () => {
    let errorCount = 0;
    const errorTimestamp$ = throwError(() => {
        const error = new Error(`This is error number ${++errorCount}`)
        error.timestamp = Date.now();
        return error
    })

    errorTimestamp$.subscribe({
        error: err => console.log(err.timestamp, err.message)
    })

    errorTimestamp$.subscribe({
        error: err => console.log(err.timestamp, err.message)
    })
}
