import { bindCallback, asyncScheduler } from 'rxjs';

export default () => {
    const func = (cb) => {
        cb(5, 'some string', { someProperty: 'someValue' })
    };

    const boundSomeFunction = bindCallback(func);
    boundSomeFunction().subscribe(values => {
        console.log(values);
    });


    // With Async
    function iCallMyCallbackSynchronously(cb) {
        cb();
    }

    const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
    const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null /*resultSelector*/, asyncScheduler);

    boundSyncFn().subscribe(() => console.log('I was sync!'));
    boundAsyncFn().subscribe(() => console.log('I was async!'));
    console.log('This happened...');

    // Logs:
    // I was sync!
    // This happened...
    // I was async!


    // Whit Object target
    const someObj = {
        getAge (cb) {
            cb('I am 48 years old.')
        }
    }

    const bindCallbackObjectFn = bindCallback(someObj.getAge)

    bindCallbackObjectFn
        .call(someObj)
        .subscribe(console.log)

    // :Log
    // I am 48 years old.
}
