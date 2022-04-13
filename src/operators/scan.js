import { of, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const source = of(1, 2, 3);
    source.pipe(
        scan((acc, curr) => acc + curr, 0)
    ).subscribe(val => console.log(val))
    // Logs: 1,3,6

    // EXAMPLE 2
    const subject = new Subject();
    const example = subject.pipe(
        scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
    example.subscribe(val =>
        console.log('Accumulated object:', val)
    );

    subject.next({ name: 'Joe' });
    // {name: 'Joe'}
    subject.next({ age: 30 });
    // {name: 'Joe', age: 30}
    subject.next({ favoriteLanguage: 'JavaScript' });
    // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
}
