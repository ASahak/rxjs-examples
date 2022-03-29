import { iif, of } from 'rxjs';

export default () => {
    let status;

    const checkTrueOrFalse = iif(
        () => status,
        of('True callback!'),
        of('False callback!'),
    );

    status = true;
    checkTrueOrFalse.subscribe(console.log);

    status = false;
    checkTrueOrFalse.subscribe(console.log);
}
