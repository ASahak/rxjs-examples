import { Observable, of } from 'rxjs';
import { map, combineLatestWith } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    const source1$ = new Observable(observer => {
        observer.next(0);

        setTimeout(() => {
            observer.next(1);
        }, 2000)
    })

    const source2$ = new Observable(observer => {
        observer.next(3);

        setTimeout(() => {
            observer.next(4);
        }, 4000)
    })

    source1$.pipe(
        combineLatestWith(source2$),
        map(value => value)
    ).subscribe(data => {
        console.log('EXAMPLE 1 - ', data);
    })
    // Output
    // [0, 3]
    // [1, 3]
    // [1, 4]

    // EXAMPLE 2
    const source1$ex = of(1, 2, 3);
    const source2$ex = of(4, 5, 6);
    const source3$ex = of(7, 8, 9);

    source1$ex.pipe(
        combineLatestWith([source2$ex, source3$ex]),
        map(value => value)
    ).subscribe(data => console.log('EXAMPLE 2 - ', data));

    // // Output
    // // [3, 6, 7]
    // // [3, 6, 8]
    // // [3, 6, 9]
}
