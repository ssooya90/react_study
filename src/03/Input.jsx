import React, { useRef, useState } from 'react';

const Input = (props) => {

    const value = props.value;
    const type = props.type;


    const [input, setInput] = useState('');
    const inputRef = useRef();


    const focus = () =>{

    }
    const handelChange = (e) => {
        setInput(e.target.value);
    }


    return (
        <div>

            <input ref={inputRef}
                   onChange={handelChange}
                   onFocus={focus}
                   value={value}
                   type={type}
                   />

            <button onClick={()=>{alert(input)}}>현재 input값</button>
        </div>
    );
};

Input.defaultProps = {
    type : 'text'
}

export default Input;
