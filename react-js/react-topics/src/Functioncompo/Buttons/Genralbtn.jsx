import React from "react";

function Genralbtn(props){
    let style = {
        backgroundColor:"orange",
        padding: "15px",
        borderRadius:"10px",
        margin:"10px",
        color:"white",
        border: 'none'
    }
    return (
        <button style={style}>{props.name}</button>
    )
}

export default Genralbtn;
