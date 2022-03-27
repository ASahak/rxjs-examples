import { bindNodeCallback } from 'rxjs';
import * as fs from 'fs';

export default () => {
    const readFileAsObservable = bindNodeCallback(fs.readFile);
    const result = readFileAsObservable('./roadNames.txt', 'utf8');
    result.subscribe(x => console.log(x), e => console.error(e))
}
