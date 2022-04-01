import { Subject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

export default () => {
    const source = new Subject();

    source.pipe(isEmpty()).subscribe(x => console.log(x));


    source.next('Not Empty');
    source.complete();
    // Logs:
    // false
}
