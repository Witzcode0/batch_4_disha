import React, { useState } from 'react'

function Form() {
    const [title, setState] = useState("");

    const updateInput = (event)=>{
        let t = event.target.value;
        setState(t)
    }

    const checkInput = () => {
        if (title == ""){
            alert("Please fill the form.")
        }
    }

    return (
        <div>
            <form action="" id='myform'>
                <p>{title}</p>
                <input type="text" onChange={updateInput} name="title" />
                <button type='submit' onClick={checkInput}>Submit</button>
            </form>
        </div>
    )
}

export default Form