import { of } from 'rxjs';
import { every, concatWith, tap, delay } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const source = of(1, 2, 3, 4, 5, 6);

    source.pipe(
        every(v => v % 2 === 0)
    ).subscribe(console.log)
    // Logs:
    // false

    // EXAMPLE 2
    const returnCode = request => Number.isInteger(request) ? 200 : 400;
    const fakeRequest = request => of({ code: returnCode(request) }).pipe(
        tap(_ => console.log(request)),
        delay(1000)
    )

    fakeRequest(1).pipe(
        concatWith(
            fakeRequest('Invalid request'),
            fakeRequest(2), //this won't execute as every will return false for previous line
        ),
        every(v => v.code === 200)
    ).subscribe(console.log)
    // Logs:
    // 1
    // false
}
