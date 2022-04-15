import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

export default () => {
    const source = of(1, 2, 3, 4);
    const example = source.pipe(reduce((acc, val) => acc + val));
    example.subscribe(val => console.log('Sum:', val));
    // Logs:
    // Sum: 10'
}
