import React, { useReducer } from 'react'

const initState = {
    count: 50
}
const funcReducer = (state, action) => {
    console.log(state)
    console.log(action.type)
    switch (action.type) {
        case "INC":
            console.log(state.count + 1)
            return {
                count: state.count + 1
            }
        case "DEC":
            console.log(state.count - 1)
            return {
                count: state.count - 1
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return initState
    }

}


function UReducer() {
    const [counter, dispatch] = useReducer(funcReducer, initState)
    return (
        <>
            <button onClick={() => dispatch({ type: "INC" })}>+</button>
            <span>{counter.count}</span>
            <button onClick={() => dispatch({ type: "DEC" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
            <button onClick={() => dispatch({ type: "SETDEFAULT" })}>SETDEFAULT</button>
        </>
    )
}

export default UReducer