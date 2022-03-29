import { generate } from 'rxjs';

export default () => {
    const result = generate(0, x => x < 3, x => x + 1, x => x);

    result.subscribe(console.log)
    // Logs:
    // 0
    // 1
    // 2
}
