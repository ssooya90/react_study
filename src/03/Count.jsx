import React, { useState } from 'react';

const Count = (props) => {


    const [count, setCount] = useState(props.count);

    return (
        <div>
            현재 카운트 : {count}

            <button onClick={() => setCount(count + 1)}></button>

        </div>
    );
};

export default Count;
