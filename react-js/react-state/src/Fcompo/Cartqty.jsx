import React, { useState } from 'react'

function Cartqty() {
    const [qty, setQty] = useState(1)
    const [decstate, setDecState] = useState(true)
    let style = {
        border : "1px solid gray",
        margin : "0 10px"
    }

    const inc = () => {
        setQty(qty + 1);
    }
    const dec = () => {
        if (qty > 1){
            setQty(qty - 1);
        }else{
            setDecState(false)
        }
    }
  return (
    <>
    <h2>Update cart Qty.</h2>
    <button onClick={dec} decstate={decstate}>-</button>
    <span style={style}> &nbsp; {qty} &nbsp; </span>
    <button onClick={inc}>+</button>
    </>
  )
}

export default Cartqty;