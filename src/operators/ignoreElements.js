import { of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

export default () => {
    of('you', 'are', 'talking', 'to', 'me').pipe(
        ignoreElements()
    ).subscribe({
        next: word => console.log(word),
        error: err => console.log(err),
        complete: () => console.log('end'),
    })
    // Logs:
    // end
}
