import React from 'react';

import "./CardList.css";
import {Card } from 'reactstrap';
import CartItem from './CartItem.js';

export default function CardList(props){

    return(
        <div>
            <Card>
                <CartItem currentItem={props.currentItem}/>
            </Card>
        </div>
    );
}

