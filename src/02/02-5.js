


// 화살표 함수
// fat arrow fuction 이라고도 한다.


function add(first, second){
    return first + second;
}

// var add = function(first, second){
//  return fist + second
// };


// 펑션을 생략할 수 있다.
let add2 = (first, second) => {
    return first + second;
}

let mult

add2(10,20);

// 펑션 생략하고, return도 생략.
// return 생략은 본문 블록이 비어 있고 결괏값을 바로 반환하는 경우에는 중괄호()를 생갹하고 => 뒤에 반환 표현식을 쓸 수 있다.
let add3 = (first, second) => first + second;


// 객체 리턴
let addAndMultiple = (first , second) => ({
        name : '쑤야',
        add : first + second
});


console.log(addAndMultiple(1,2));


// 커링 패턴처럼 계단현 함수식을 쓸 때 유용
function addNumber(num){
    return function (value) {
        return num + value;
    }
}

var addNumber2 = num => value => num + value;

console.log(addNumber2(10))



// 콜백 함수의 this 범위로 생기는 오류 회피 가능

class MyClass {

    constructor() {

        this.value = 10;
    }

    addThis3 = (first , second) => this.value + first + second;


}

var my = new MyClass();

console.log(my.addThis3(10,20));