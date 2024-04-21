

let num = 1;
num = num*3;
let str = '문자';
str = '다른 문자';
let arr = [];
arr = [1,2,3];
let obj = {};
obj = { name : '새 객체'};

console.log(obj)



const arr2 = [];
arr2.push(1);
arr2.splice(0,0,0);
arr2.pop();

console.log(arr2);

const obj2 = {};
obj2['name'] = '내이름';
console.log(obj2)
Object.assign(obj2, { name : '새이름'});
console.log(obj2)



const obj3 = { name : '내이름', age : 20};
const objValue = { name : '새이름' , age : obj3.age};

console.log(objValue);

const obj4 = { ...obj3 , name : '새이름'};

console.log(obj4)

// const { name, ...obj5} = obj4;
const { name, obj6} = obj4;

// console.log(obj5);
console.log(obj6)


// 객체에서 특정값 추출해서 변수에 넣기
// 첫번재 인자는 키 이름을 맞춤
// 두번재 인자는 변수명



var parts = ['shoulders', `knees`];
var lyrics = ['head', parts, 'and', 'toes'];
var lyrics2 = ['head', ...parts, 'and', 'toes'];

console.log(lyrics);
console.log(lyrics2);



const arry1 = [1, 2];
const arry2 = [3, 4];

const combined = [...arry1, ...arry2];
console.log(combined);    // [1, 2, 3, 4]

// Destructuring(구조 분해 할당)과 함께 사용
const [first, second, third, fourth, fifth = 'empty'] = combined;

console.log(first);
console.log(second);
console.log(fifth);    // empty

const spread = (...args) => {
    var[one, two, ...others] = args;
    console.log(others);
}
;
const object2 = {three: 3, four: 4, other: 'bye'};

const newObj = {
    ...object1, ...object2
}
spread(...combined);    // [3, 4]

const object1 = {one: 1, two: 2, other: 'hi'}

const {etc , ...object3} = object1

console.log(object3)

console.log(newObj);

// Destructuring(구조 분해 할당)
const {one, ...one2} = object1;

console.log(one2);
console.log(one)


const myArray = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];

const myObject = {...myArray};

console.log(myArray); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"]
console.log(myObject); // {0: "Canna", 1: "Cuzz", 2: "Faker", 3: "Teddy", 4: "Effort"}