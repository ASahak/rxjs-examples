import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

export default () => {
    const timer$ = interval(1000);

    timer$.pipe(take(4)).subscribe(console.log)
}
