import React from 'react';

import {Card } from 'reactstrap';
import OrderItem from './OrderItem.js';

export default function OrderList(props){

    return(
        <div>
            <Card>
                <OrderItem currentItem={props.currentItem}/>
            </Card>
        </div>
    );
}