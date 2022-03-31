import { of, empty } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

export default () => {
    // EXAMPLE 1
    of().pipe(
        defaultIfEmpty('Observable is empty!')
    ).subscribe(console.log)
    // Logs:
    // Observable is empty!

    // EXAMPLE 2
    empty().pipe(
        defaultIfEmpty('Observable is empty!')
    )
    // Logs:
    // Observable is empty!
}
