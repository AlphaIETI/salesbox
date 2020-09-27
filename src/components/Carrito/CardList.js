import React from 'react';

import "./CardList.css";
import {Card } from 'reactstrap';
import Item from './Item.js';

export default function CardList(props){

    return(
        <div>
            <Card>
                <Item tarea={props.tarea}/>
            </Card>
        </div>
    );
}

