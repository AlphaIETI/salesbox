import React from 'react';

import th from '@material-ui/core/TableHead';
import tr from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import dino from '../../img/dino.jpg';
import dino2 from '../../img/dino2.jpg';
import dino3 from '../../img/dino3.jpg';
import "./Carrito.css";
export class Carrito extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div className="tabla">
                <div className="main">
                    <Checkbox color="default"></Checkbox>
                </div>
                <div className="ImageColumn">
                    <img src={dino} className="ima-dino"/>
                </div>
                <div className="DescriptionColumn">
                    <div className="DescriptionColumnText" >
                        Buzo Buso Ancho Hoodie Mujer Stranger Things
                    </div>
                    <div className="DescriptionColumnText">
                        hola como vas
                    </div>
                    <div className="DescriptionColumnText">
                        no muy bien gracias
                    </div>
                    <div className="DescriptionColumnItems">
                        <div className="ItemColumn">
                            hola
                        </div>
                        <div className="ItemColumn">
                            Como
                        </div>
                        <div className="ItemColumn">
                            estas
                        </div>
                    </div>

                </div>
                <div className="PriceColumn">
                    37.500
                </div>
            </div>
        );
    }
}


export default Carrito;