

// 비동기 테스트


function work1 (onDone) {
    setTimeout (() => {onDone('작업1 완료!')},100);

    // setTimeout (() => onDone('작업1 완료!'),100);
// 본문 블럭(함수의 몸통)이 비어있고, 결과 값을 바로 반환하는 경우 {} (중괄호) 생략 가능

}

// 매개변수가 없기 때문에 ()를 반드시 써줘야 함.

// 정리
/**
1)   (매개변수) => { 본문 }

2)   매개변수가 하나뿐인 경우 괄호 생략 가능

3)   매개변수가 없을 경우에는 괄호 필수

4)   본문이  return [식 or 값] 뿐인 경우  { } 와  return 키워드 생략 가능

5)   위 4) 에서  return 할 값이  객체인 경우네는 괄호 필수
 **/

// 풀어서
function test (onDone){
    setTimeout(function(){
        onDone('작업 완료');
    },100)
}

function work2 (onDone) {
    setTimeout (() => onDone('작업2 완료!'),200);
}
function work3 (onDone) {
    setTimeout (() => onDone('작업3 완료!'),300);
}

function urgentWork() {
    console.log('긴급 작업')
}

work1(function(msg1){
    console.log('done after 100ms:' + msg1);

    work2(function(msg2){
        console.log('done after 200ms:' + msg2);

        work3(function(msg3){
            console.log('done after 300ms:' + msg3);

        })

    })
})

urgentWork();





