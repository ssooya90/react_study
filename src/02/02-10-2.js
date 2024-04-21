

const work1 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업1 완료!'), 100);
    });

const work2 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업2 완료!'), 500);
    })

const work3 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업3 완료!'), 300);
    })

function urgentWork() {

    console.log("긴급 작업")
}

const nextWorkOnDone2 = function(msg1){

    console.log('done after 100ms : ' + msg1);
    return work2();
}

const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms : ' + msg1);
    return work2();
}

work1()
.then(nextWorkOnDone2)
.then((msg2) => {
    console.log("done after 200ms : " + msg2);
    return work3();
})
.then((msg3) => {
    console.log("mdone after 300ms : " + msg3)
})

urgentWork();


const work1and2 = () => work1()
    .then((msg1) => {
        console.log(msg1);
        return work2();
    });


work1and2()
    .then((msg2) => {
        console.log(msg2)
        return work3()
    })
    .then((msg3) => {
        console.log(msg3 + "asdf")
        console.log(msg3 + "asdf")
    });


var me = {
    name:'jojoldu',
    age: 1
}

console.log(me)
