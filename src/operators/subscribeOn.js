import { of, merge, subscribeOn, asyncScheduler } from 'rxjs';

export default () => {
    const a1 = of(1, 2, 3);
    const b1 = of(4, 5, 6);

    merge(a1, b1).subscribe(console.log);

    // Outputs
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6

    const a2 = of(1, 2, 3).pipe(subscribeOn(asyncScheduler));
    const b2 = of(4, 5, 6);

    merge(a2, b2).subscribe(console.log);

    // Outputs
    // 4
    // 5
    // 6
    // 1
    // 2
    // 3
}
