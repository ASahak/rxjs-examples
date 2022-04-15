import { of, merge } from 'rxjs';

export default () => {
    const a = of(1, 2, 3);
    const b = of(4, 5, 6);

    merge(a, b).subscribe(console.log);

    // Outputs
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
}
