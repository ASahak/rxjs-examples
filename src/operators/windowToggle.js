import { timer, interval } from 'rxjs';
import { windowToggle, mergeAll, tap } from 'rxjs/operators';

export default () => {
    // emit immediately then every 1s
    const source = timer(0, 1000);
    // toggle window on every 5
    const toggle = interval(5000);
    const example = source.pipe(
        // turn window on every 5s
        windowToggle(toggle, val => interval(val * 1000)),
        tap(_ => console.log('NEW WINDOW!'))
    );

    example.pipe(
        mergeAll()
    ).subscribe(val => console.log(val));
    // Logs:
    // "NEW WINDOW!"
    // 5
    // "NEW WINDOW!"
    // 10
    // 11
    // "NEW WINDOW!"
    // 15
    // 16
    // "NEW WINDOW!"
    // 20
    // 21
    // 22
}
