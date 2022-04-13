import { timer } from 'rxjs';
import { windowTime, mergeAll, tap } from 'rxjs/operators';

export default () => {

    //emit every 1s
    const source = timer(0, 1000);
    const example = source.pipe(
        //start new window every 4s
        windowTime(4000),
        tap(_ => console.log('NEW WINDOW!'))
    );

    example
    .pipe(
        mergeAll()
    )
    .subscribe(val => console.log(val));
    //Logs:
    // "NEW WINDOW!"
    // 0
    // 1
    // 2
    // 3
    // "NEW WINDOW!"
    // 4
    // 5
    // 6
    // 7
}
