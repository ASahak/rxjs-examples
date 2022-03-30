import { partition, of, from } from 'rxjs';
import { mergeWith, catchError, map } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const [odd$, evens$] = partition(of(1, 2, 3, 4, 5, 6), (v) => v % 2 === 0)

    odd$.subscribe(console.log);
    // Logs:
    // 2
    // 4
    // 6
    evens$.subscribe(console.log);
    // Logs:
    // 1
    // 3
    // 5

    // EXAMPLE 2
    const source = from([1, 2, 3, 4, 5, 6]);
    const example = source.pipe(
        map(
            v => {
                if (v > 3) throw `${v} is greater than 3.`;
                return { success: v }
            }
        ),
        catchError(val => of({ error: val }))
    );
    const [success, error] = partition(example, res => res.success)

    success.pipe(
        map(v => v.success + ' Success'),
        mergeWith(
            error.pipe(map(v => v.error + ' Error'))
        )
    ).subscribe(console.log)
    // Logs:
    // 1 Success
    // 2 Success
    // 3 Success
    // 4 is greater than 3. Error
}
