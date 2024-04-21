
const work1 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업 1완료'), 100)
    });
const work2 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업 2완료'), 200)
    });
const work3 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업 3완료'), 300)
    });

function urgentWork(){
    console.log('긴급 작업');
}


const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms ' + msg1);
    return work2();
}

work1()
    .then(nextWorkOnDone)
    .then((msg2) => {
        console.log('done after 200ms' + msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 300ms' + msg3);
    })

urgentWork();



const work1And2 = () => work1()
.then((msg1) => {
    console.log("done after 1000ms:" + msg1);
    return work2();
})

work1And2()
    .then((msg2) => {
        console.log("done after 2000ms:" + msg2);
        return work3()
    })
    .then((msg3) => {
        console.log("done after 3000ms:" + msg3);
    })



