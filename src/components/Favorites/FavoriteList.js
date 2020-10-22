import React from 'react';

import {Card } from 'reactstrap';
import FavItem from './FavItem.js';

export default function CardList(props){

    return(
        <div>
            <Card>
                <FavItem favoritos={props.favoritos}/>
            </Card>
        </div>
    );
}

