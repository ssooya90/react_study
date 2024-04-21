
function parse(qs){

    var queryString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {};

    for(var i = 0; i < chunks.length; i ++){

        var parts = chunks[i].split('=');
        var key = parts[0];
        var value = parts[1];

        result[key] = value;
    }

    return result;
}




console.log(parse('banana=10&app=20&orange=30'));


// forEach함수 이용
function parse2(qs){

    var queryString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {};

    chunks.forEach((chunk) => {
        var parts = chunk.split('=');
        var key = parts[0];
        var value = parts[1];
        result[key] = value;

    })

    return result;
}

console.log(parse2('banana=10&app=20&orange=30'));


// 구조분해 이용
function parse3(qs){

    var queryString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {};

    chunks.forEach((chunk) => {

        const [ key , value ] = chunk.split('=');

        // chunk.split('=') 의 결과는 [banana, 10] 이런식으로 나오게 된다. 이 구조를 분해해서 바로 담아버린다

        result[key] = value;

    })

    return result;
}

console.log(parse3('banana=10&app=20&orange=30'));



// map 이용
function parse4(qs){

    var queryString = qs.substr(1);
    var chunks = qs.split('&');

    const result = chunks.map((chunk) => {
        const [ key , value ] = chunk.split('=');

        return { key : key, value : value};
    })


    return result;
}

console.log(parse4('banana=10&app=20&orange=30'));


// reduce 배열 변환 예제
function parse5(qs){

    var queryString = qs.substr(1);
    var chunks = qs.split('&');

    return chunks
        .map((chunk) => {
            const [ key , value ] = chunk.split('=');
            return { key : key, value : value};
        })
        .reduce((result, item) => {
            result[item.key] = item.value;
            return result;
        }, {});

        // reduce 두번째 매개변수는 빈값





}

console.log(parse5('banana=10&app=20&orange=30'));