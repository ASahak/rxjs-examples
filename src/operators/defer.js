import { defer, fromEvent, interval, empty } from 'rxjs';

export default () => {
    const clicksOrInterval = defer(function () {
        return Math.random() > 0.5
            ? fromEvent(document, 'click')
            : interval(1000);
    });
    clicksOrInterval.subscribe(x => console.log(x));
}
