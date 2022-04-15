import { of } from 'rxjs';
import { max } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    of(5, 4, 7, 2, 8).pipe(
        max(),
    ).subscribe(x => console.log(x));
    // Logs:
    // 8

    // EXAMPLE 2
    of(
        { age: 7, name: 'Foo' },
        { age: 5, name: 'Bar' },
        { age: 9, name: 'Beer' },
    ).pipe(
        max((a, b) => a.age < b.age ? -1 : 1),
    )
        .subscribe((x) => console.log(x.name));
    // Logs:
    // 'Beer'
}
