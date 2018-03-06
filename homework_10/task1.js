/*
 For interviewer: Compare array and string return false, cause objects can be compared only
 with a link of itself(true). (I misunderstood the question and could not answer it
 immediately). Don`t hope it`s help, but why not?
*/

function debounce(func, delay){
    let timer = null;
    return function (...args){
        const appFunc = () => {
            func.apply(this, args);
            timer = null;
        };
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(appFunc, delay);
    };
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'