import { timer } from 'rxjs';

export default () => {
    // EXAMPLE 1
    timer(1000, 2000)
        .subscribe(console.log);

    // EXAMPLE 2

    timer(4000)
        .subscribe(console.log);
}
