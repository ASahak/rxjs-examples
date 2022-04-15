import { of } from 'rxjs';
import { materialize, map } from 'rxjs/operators';

export default () => {
    const letters = of('a', 'b', 13, 'd');
    const upperCase = letters.pipe(map(x => x.toUpperCase()));
    const materialized = upperCase.pipe(materialize());
    materialized.subscribe(x => console.log(x));
    // Results in the following:
    // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
    // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
    // - Notification {kind: "E", value: undefined, error: TypeError:
    //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
    //   [as project] (http://1…, hasAValue: false}
}
