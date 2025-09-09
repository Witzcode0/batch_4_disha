import React, { Component } from "react";

class Createstate extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        color: "pink",
        font_style: "cursive",
        style: {
            backgroundColor: "orange",
            padding: "15px",
            borderRadius: "10px",
            margin: "10px auto",
            color: "white",
            border: 'none'
        }
    };
}

changeFontColor = () => {
    this.setState({
        color: "red"
    })
}




render() {
    return (
        <div>
            <h4 style={{ color: this.state.color, fontFamily: this.state.font_style }}>This is Why {this.props.name} is so Famous!</h4>
            <button style={this.state.style} onClick={this.changeFontColor}>Change Color</button>
        </div>
    )
}
}
export default Createstate;