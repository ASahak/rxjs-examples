import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    of(1, 2, 3, 4, 4, 3, 3, 2).pipe(
        distinctUntilChanged(),
    ).subscribe(console.log)
    // Logs:
    // 1
    // 2
    // 3
    // 4
    // 3
    // 2

    // EXAMPLE 2
    from([
        { name: 'Brian' },
        { name: 'Joe' },
        { name: 'Joe' },
        { name: 'Sue' }
    ]).pipe(
        distinctUntilChanged((prev, curr) =>  prev.name === curr.name)
    ).subscribe(console.log)
    // Logs:
    // { name: 'Brian' }
    // { name: 'Joe' }
    // { name: 'Sue' }
}
