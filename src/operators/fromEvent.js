import { fromEvent } from 'rxjs';

export default () => {
    const result = fromEvent(document, 'click')

    result.subscribe(console.log)
}
