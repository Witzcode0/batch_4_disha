import React, {Component} from "react";

import "./card.css";

class Card extends Component{
    

    render(){
        return (
            <div className="card">
                <img src="https://ctctourism.com/blog/storage/banners/img-word-banner.jpg" alt="" />
                <h4>This is Why IMG World is so Famous!</h4>
                <p>Those who have experienced the fun of IMG World Dubai can only tell how thrilling it is! IMG World Of Adventure is currently known as the largest indoor theme park in the world, it has beaten another legendary entertainment destination in Dubai; the Ferrari World Abu Dhabi.</p>
            </div>
        )
    }
}

export default Card;