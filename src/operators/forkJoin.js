import { forkJoin, timer, of } from 'rxjs';

export default () => {
    const observable = forkJoin({
        ofObs: of(1, 2, 3, 4),
        promiseObs: Promise.resolve(1),
        timerObs: timer(4000),
    })
    observable.subscribe({
        next: v => console.log(v),
        complete: () => console.log('Complete!')
    })
}
