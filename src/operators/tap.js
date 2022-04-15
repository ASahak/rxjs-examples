import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export default () => {
    const source = of(1, 2, 3, 4, 5);
    // transparently log values from source with 'tap'
    const example = source.pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(val => val + 10),
        tap(val => console.log(`AFTER MAP: ${val}`))
    );

    //'tap' does not transform values
    example.subscribe(val => console.log(val));
    //output: 11...12...13...14...15
}
