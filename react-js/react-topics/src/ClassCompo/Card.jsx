import React, { Component } from "react";
import Createstate from "./CreateState";
import "./card.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      place: "Taj Mahal!!!",
      dark: false, // theme state
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      dark: !prevState.dark,
    }));
  };

  render() {
    const cardStyle = {
      backgroundColor: this.state.dark ? "black" : "white",
      color: this.state.dark ? "white" : "black",
      padding: "15px",
      borderRadius: "10px",
      transition: "0.3s ease-in-out",
    };

    const btnStyle = {
      display: "flex",
      justifyContent: "center",
      color: "white",
      backgroundColor: this.state.dark ? "green" : "black",
      textAlign: "center",
      margin: "15px",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
    };

    return (
      <div className="card" style={cardStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/250px-Taj_Mahal_%28Edited%29.jpeg"
          alt=""
        />

        <Createstate name={this.state.place} />

        <p>
          The Taj Mahal is an ivory-white marble mausoleum on the right bank of
          the river Yamuna in Agra, Uttar Pradesh, India.
        </p>

        <button style={btnStyle} onClick={this.toggleTheme}>
          {this.state.dark ? "Light Theme ☀️" : "Dark Theme 🌙"}
        </button>
      </div>
    );
  }
}

export default Card;
