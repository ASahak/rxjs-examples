import { interval } from 'rxjs';
import { share, map, take } from 'rxjs/operators';

export default () => {
    const source = interval(1000)
        .pipe(
            map((x) => {
                console.log('Processing: ', x);
                return x * x;
            }),
            take(2),
            share()
        );
    source.subscribe(x => console.log('subscription 1: ', x));
    source.subscribe(x => console.log('subscription 1: ', x));
}
