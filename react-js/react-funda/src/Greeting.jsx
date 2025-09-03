import React from "react";
import './App.css'

function Greeting(){


    
    // HTML:
    // <div class="container">
    //   <h1>Hello, World!</h1>
    //   <p>This is a paragraph.</p>
    // </div>


    // JSX:
    // <div className="container">
    //   <h1>Hello, World!</h1>
    //   <p>This is a paragraph.</p>
    // </div>

    
    // HTML:
    // <input type="text" value="React" >


    // JSX:
    // <input type="text" value="React" />

    // HTML:
    // <button onclick="alert('Clicked!')">Click Me</button>


    // JSX:
    // <button onClick={() => alert('Clicked!')}>Click Me</button>




    let name = "Disha";
    var para = { color: 'red', fontSize: '20px' };

    function Alert(){
        alert("Button clicked!!!");
    }

    return(
        <>
        {/* <p>{para}</p> */}
        <p className="para" style={para}>Hello, {name}</p>
        {/* <button onClick={Alert}>click me</button> */}
        <button onClick={() => alert("using arrow function")}>Using arrow function</button>
        </>
    )
}

export default Greeting;