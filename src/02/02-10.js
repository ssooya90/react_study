function work1(onDone){

    // setTimeout(() => onDone('작업1 완료'),100)

    setTimeout(function(){
        return onDone('작업 1완료');

    },100)
}


work1(function(msg1){

    console.log('done after 100ms : ' + msg1)
})


work1("테스트")