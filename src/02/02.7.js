
var x = 0;
var y = 0;
var obj = { x: x, y:y};
var objEs6 = {x,y}; // ES6에서는 key 값을 생략하면 키의 이름으로 키갑 지정

console.log(objEs6);

var randomKeyString = 'other';
var combined = {};

combined['one' + randomKeyString] = 'some value';


// 객체 생성 블록 안에 대괄호 ([])를 사용하여 표현식을 작성하면 추갛여 계산된 키값을 생성할 수 있음
var combinedEs6 = {
    ['one' + randomKeyString] : 'some value',
}

console.log(combinedEs6);

console.log(combined)

var obj2 = {
    x: x,
    methodA : function() {console.log('method A')},
    methodB : () => 0
}


// function 키워드 생략하여 함수를 선언할 수 있음
var obj2Es6 = {
    x,
    methodA() { console.log("ASDF")},
    methodB() { return 0}
}

console.log(obj2Es6.methodB());

console.log(obj2.methodA())
console.log(obj2.methodB())

console.log(obj2)

var multiLineTxt = `string text line 1
 string text line 2`

console.log(multiLineTxt);

console.log(obj);

