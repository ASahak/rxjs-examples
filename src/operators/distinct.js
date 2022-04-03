import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    of(1, 2, 3, 4, 3, 2, 1, 3, 2,1).pipe(
        distinct()
    ).subscribe(console.log)
    // Logs:
    // 1
    // 2
    // 3
    // 4

    // EXAMPLE 2
    of({ age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo'}).pipe(
            distinct(v => v.name)
    ).subscribe(console.log)
    // Logs:
    // { age: 4, name: 'Foo'}
    // { age: 7, name: 'Bar'}
}
