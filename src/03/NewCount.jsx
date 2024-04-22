import React, { useEffect, useState } from 'react';

const NewCount = (props) => {


    const [newCount, setNewCount] = useState(props.count);


    //
    useEffect(() => {

        console.log("렌더링 될때마다 실행")

        setNewCount( props.count)

    }, [props.count]);

    // useEffect 첫번째 파라미터에는 함수(실행 구문)
    // useEffect 두번째 파라미터에 의존값
    // 위 코드는 상위 부모에서 prop를 변경한다면 다시 렌더링하게 됨

    // useEffect는 componentDidMount, componentDidUpdate, componentWillUnmount의 역할 수행.
    // 즉 처음 마운트될떄 호출




    return (
        <div>
            현재 카운트 : {newCount}
            <button onClick={() => setNewCount(newCount + 1)}>1 증가</button>
            <button onClick={() => props.clearCount()}>초기화</button>
        </div>
    );
};

export default NewCount;
