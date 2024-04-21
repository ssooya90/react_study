import React from 'react';
import PropsComponent from './PropsComponent';

const MyComponent = () => {

    const name = "최희수"
    const age = "33"

    return (
        <div>
            <PropsComponent
                bored
                age={age}
            >
            <div>칠드런 <div>테스트</div></div>
            </PropsComponent>

        </div>
    );
};

export default MyComponent;
