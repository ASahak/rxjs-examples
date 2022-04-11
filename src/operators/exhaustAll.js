import { timer, interval } from 'rxjs';
import { exhaustAll, map, take } from 'rxjs/operators';

export default () => {
    const createSource = (index) => interval(index * 1000).pipe(
        take(3),
        map(value => `${index}-${value + 1}`)
    )

    const source$ = timer(0, 2500).pipe(
        take(3)
    );
    source$.pipe(
        map(v => createSource(v + 1)),
        exhaustAll()
    ).subscribe({
        next: val => console.log(`${new Date().toLocaleTimeString()}: exhaustAll`, val)
    });
    // Logs:
    // xx:xx:xx AM: exhaustAll 1-1
    // xx:xx:xx AM: exhaustAll 1-2
    // xx:xx:xx AM: exhaustAll 1-3
    // xx:xx:xx AM: exhaustAll 3-1
    // xx:xx:xx AM: exhaustAll 3-2
    // xx:xx:xx AM: exhaustAll 3-3
}
