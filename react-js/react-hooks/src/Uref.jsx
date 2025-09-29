import React, { useRef, useState } from 'react'

function InputFocus() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    console.log(inputRef1)

    const HandleInput = () => {
        inputRef1.current.focus()
        inputRef1.current.style.border = "2px solid red"
        inputRef2.current.style.display = "inline"
    }


    return (
        <>
            <input ref={inputRef1} type="text" onChange={HandleInput} placeholder='Enter ARN' />
            <input ref={inputRef2} style={{ display: 'none' }} type="text" />
            <button  >click me</button>
        </>
    )
}

export default InputFocus