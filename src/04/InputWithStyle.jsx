import React, { useRef, useState } from 'react';

const InputWithStyle = ({errorMessage, label, value, name, type}) => {

    const inputRef = useRef(null)
    const [input, setInput] = useState();

    const handelChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className={'input-field'}>

            <input
            id={`input_${name}`}
            className="validate"
            ref={inputRef}
            type={type}
            onChange={handelChange}
            defaultValue={value}
            />
        </div>
    );
};

export default InputWithStyle;
