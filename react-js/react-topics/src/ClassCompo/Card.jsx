import React, {Component} from "react";
import Createstate from "./CreateState";


import "./card.css";

class Card extends Component{

    constructor(){
        super();
        this.state = { place: "Taj Mahal!!!" };
    }
    

    render(){
        return (
            <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/250px-Taj_Mahal_%28Edited%29.jpeg" alt="" />
                <Createstate name={this.state.place} />
                <p>The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ -/ TAHJ mə-HAHL, TAHZH -⁠; Hindustani: [taːdʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.</p>
            </div>
        )
    }
}

export default Card;