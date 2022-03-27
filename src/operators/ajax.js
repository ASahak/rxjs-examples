import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export default () => {

    const url = 'some_endpoint';

    const result = ajax({
        url,
        method: 'GET',
        headers: {
            /*some headers*/
        },
        body: {
            /*in case you need a body*/
        }
    });

    result.pipe(
        map(response => console.log(response)),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        })
    )
}
