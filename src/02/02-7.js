
var list = [0,1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;

console.log(item3)

var temp = item2;


item2 = item1;
item1 = temp;

var obj = {
    key1 : 'one',
    key2 : 'two',
}

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'defalut key3 value'; // || 뒤에는 없을 경우 대입값

console.log(key3);

var newKey = obj.key1;

// 구조 분해!

var listEs6 = [0,1];
var [
    item1Es6,
    item2Es6,
    item3Es6 = -1]
= listEs6;

console.log(listEs6);
console.log(item3Es6);

[item2Es6, item1Es6] = [item1Es6, item2Es6];

var objEs6 = {
    key1Es6 : 'one',
    key2Es6 : 'two'
};

var {
    key1Es6 : newKey1,
    key2Es6,
    key3Es6 = 'defalut key3'
} = objEs6;

console.log(objEs6);


// 배열값 추출 구조분해
var [item1, ...otherItems] = [0,1,2];

console.log(item1)
console.log(otherItems)

// 객체 키값 출력
var {key5, ...others2} = {key5 : 'one', key2 : 'two'};

console.log(key5)
console.log(others2)



