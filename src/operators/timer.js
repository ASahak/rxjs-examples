import { timer } from 'rxjs';

export default () => {
    // EXAMPLE 1
    timer(1000, 2000)
        .subscribe(console.log);
    // Logs:
    // 0, 1 [after 1000ms -> 2000ms]

    // EXAMPLE 2

    timer(4000)
        .subscribe(console.log);
    // Logs:
    // 0 [after 4000ms]
}
