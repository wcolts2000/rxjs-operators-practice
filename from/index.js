import { from } from 'rxjs';
import { take } from 'rxjs/operators';
//convert an array, promise or iterator into an observable **fromPromise can be used specifically for promises;

const fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21];
const fibonacciPromise = new Promise((resolve) => resolve(fibonacciArray));
function* fibonacciGenerator() {
    let a = 1;
    let b = 1;
    while (true) {
        let c = a + b;
        yield c;
        a = b;
        b = c;
    }
}

const from$ = from(fibonacciArray);
const fromPromise$ = from(fibonacciPromise);
const fromGenerator$ = from(fibonacciGenerator()).pipe(take(20)); // using take here so we don't quickly hit infinity with the generator

from$.subscribe(console.log);
fromPromise$.subscribe(console.log); // note this shows up last
fromGenerator$.subscribe(console.log);
