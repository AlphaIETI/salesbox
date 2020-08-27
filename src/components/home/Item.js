import React from 'react';
import './Item.css';

function Item(props){
    return (
        <div className="item">
            <div className="image"><img src={'img/'+props.image} width="100%" height="50%"/></div>
            <div className="title">{props.title}</div>
        </div>

    )
}

export default Item;