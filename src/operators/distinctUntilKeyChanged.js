import { of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    of(
        { age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo'},
        { age: 6, name: 'Foo'},
    ).pipe(
        distinctUntilKeyChanged('name'),
    ).subscribe(console.log)
    // Logs:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo' }

    // EXAMPLE 2
    of(
        { age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo2'},
        { age: 6, name: 'Foo3'},
    ).pipe(
        distinctUntilKeyChanged('name', (x, y) => x.substring(0, 3) === y.substring(0, 3)),
    ).subscribe(console.log)
    // Logs:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo2' }
}
