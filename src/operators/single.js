import { of } from 'rxjs';
import { single } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const source1$ = of(
        { name: 'Ben' },
        { name: 'Tracy' },
        { name: 'Laney' },
        { name: 'Lily' }
    )

    source1$.pipe(
        single(v => v.name.startsWith('B'))
    ).subscribe(console.log)
    // Logs:
    // Ben

    // EXAMPLE 2
    const source2$ = of(
        { name: 'Ben' },
        { name: 'Tracy' },
        { name: 'Laney' },
        { name: 'Ben' }
    )

    source2$.pipe(
        single(v => v.name.startsWith('B'))
    ).subscribe(console.log)
    // Logs:
    // Error emitted: SequenceError('Too many values match')
}
