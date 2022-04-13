import { interval } from 'rxjs';
import { pairwise, take } from 'rxjs/operators';

export default () => {
    interval(1000)
    .pipe(pairwise(), take(5))
    .subscribe(console.log);
    // Logs: [0,1], [1,2], [2,3], [3,4], [4,5]
}
