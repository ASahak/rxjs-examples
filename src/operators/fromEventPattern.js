import { fromEventPattern } from 'rxjs';

export default () => {

    function addClickHandler(handler) {
        document.addEventListener('click', handler);
    }

    function removeClickHandler(handler) {
        document.removeEventListener('click', handler);
    }

    const clicks = fromEventPattern(
        addClickHandler,
        removeClickHandler
    );
    clicks.subscribe(x => console.log(x));
}
