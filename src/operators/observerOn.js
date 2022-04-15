import { interval, animationFrameScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

export default () => {

    const someDiv = document.querySelector("#someDiv");
    const intervals = interval(10);                // Intervals are scheduled
                                                   // with async scheduler by default...
    intervals.pipe(
        observeOn(animationFrameScheduler),          // ...but we will observe on animationFrame
    )                                              // scheduler to ensure smooth animation.
    .subscribe(val => {
        someDiv.style.height = val + 'px';
    });
}
