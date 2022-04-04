import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

export default () => {
    const seconds = interval(500);

    seconds.pipe(
        skip(10)
    ).subscribe(console.log)
    // Logs:
    // emit the timer value after 10th
}
