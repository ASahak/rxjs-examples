import { from, of, zip } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

export default () => {
    const people = [
        { name: 'Sue', age: 25 },
        { name: 'Joe', age: 30 },
        { name: 'Frank', age: 25 },
        { name: 'Sarah', age: 35 }
    ];

    from(people)
    .pipe(
        groupBy(
            person => person.age
        ),
        mergeMap(group => zip(of(group.key), group.pipe(toArray())))
    )
    .subscribe(console.log);
    // Logs:
    // [25, [{ name: 'Sue', age: 25 }, { name: 'Frank', age: 25 }]]
    // [30, [{ name: 'Joe', age: 30 }]]
    // [35, [{ name: 'Sarah', age: 35 }]]

}
