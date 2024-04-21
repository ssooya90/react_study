
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';



function func() {
    var args = Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1);
}
//
var [first, second, three = 'empty', ...others] = array1;

console.log(first);
console.log(second);
console.log(three);

console.log(array1)

function func2(...args){
    var [first, ...others] = args;
}


const myArray = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];
const myObject = {...myArray};

console.log(myObject);


const myObject1 = {
    laptop: 'MacBook Pro',
    tablet: 'iPad Pro 11'
}

const myObject2 = {
    ...myObject1,
    phone: 'Galaxy Note 10'
};


console.log(myObject1)
console.log(myObject2)
