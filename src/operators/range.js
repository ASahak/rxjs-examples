import { range } from 'rxjs';

export default () => {
    const numbers = range(1, 3);

    numbers.subscribe(console.log);
    // Logs:
    // 1
    // 2
    // 3
}
