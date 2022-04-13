import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

export default () => {
    const source = from([
        { name: 'Joe', age: 30 },
        { name: 'Sarah', age: 35 }
    ]);
    source.pipe(
        pluck('name')
    ).subscribe(console.log)
    // Logs: "Joe", "Sarah"
}
