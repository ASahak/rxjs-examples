import { from, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

export default () => {
    //emit next and error notifications
    const source = from([
        Notification.createNext('SUCCESS!'),
        Notification.createError('ERROR!')
    ]).pipe(
        //turn notification objects into notification values
        dematerialize()
    );

    const subscription = source.subscribe({
        next: val => console.log(`NEXT VALUE: ${val}`),
        error: val => console.log(`ERROR VALUE: ${val}`)
    });
    // Logs:
    // 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
}
