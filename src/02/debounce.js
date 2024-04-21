
function debounce(func, delay){

    let inDebounce;

    return function(...args){

        if(inDebounce){
            clearTimeout(inDebounce)
        }

        inDebounce = setTimeout(
            () => func(...args),
            delay);
    }

}

const run = debounce(val => console.log(val), 100);

run('a')
run('b')

console.log("TEST")
console.log("TEST")
run(2);
run(3);


