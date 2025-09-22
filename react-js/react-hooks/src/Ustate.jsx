import React, { useState } from 'react'

function Ustate() {
    const [counter, setCounter] = useState(0);
    // const inc = () => {
    //     setCounter(counter + 1);
    // }
    // const dec = () => {
    //     setCounter(counter - 1);
    // }
  return (
    <>
    <div>usetate counter : {counter}</div>
    {/* <button onClick={dec}>-</button>
    <button onClick={inc}>+</button> */}
    <button onClick={() => setCounter(counter - 1)}>-</button>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    </>

  )
}

export default Ustate