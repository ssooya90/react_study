import React, { useState } from 'react';

const StateExample = () => {

    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState('no data');


    const handleData = () => {

        const data = 'new data';

        setLoading(false)
        setFormData(data+formData)


    }

    setTimeout(handleData, 4000);


    return (
        <div>

            <span>로딩중 : {String(loading)}</span>
            <span>결과 : {formData}</span>

        </div>
    );
};

export default StateExample;
