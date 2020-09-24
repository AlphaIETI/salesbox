import React from 'react';

import "./CardList.css";
import {Card } from 'reactstrap';
import Item from './Item.js';



export default function CardList(){


    return(
        <div>
            <Card>
                <Item/>
            </Card>
        </div>
    );
}

