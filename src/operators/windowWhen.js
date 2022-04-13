import { timer, interval } from 'rxjs';
import { windowWhen, mergeAll, tap } from 'rxjs/operators';

export default () => {

    const source = timer(0, 1000);
    const example = source.pipe(
        //close window every 5s and emit observable of collected values from source
        windowWhen(() => interval(5000)),
        tap(_ => console.log('NEW WINDOW!'))
    );

    example.pipe(
        mergeAll()
    ).subscribe(val => console.log(val));
    //Logs:
    // "NEW WINDOW!"
    // 0
    // 1
    // 2
    // 3
    // 4
    // "NEW WINDOW!"
    // 5
    // 6
    // 7
    // 8
    // 9
}
