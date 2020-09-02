import React from 'react';

import th from '@material-ui/core/TableHead';
import tr from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import saco from '../../img/saco.jpg';
import saco2 from '../../img/saco2.jpg';
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
                    <img src={saco} className="ima-dino"/>
                </div>
                <div className="DescriptionColumn">
                    <div className="DescriptionColumnText" >
                        Buzo Buso Ancho Hoodie Mujer Stranger Things
                    </div>
                    <div className="DescriptionColumnText">
                        Solo quedan 5 unidades en Stock
                    </div>
                    <div className="DescriptionColumnText">
                        Cantidad: 5
                    </div>
                    <div className="DescriptionColumnItems">
                        <div className="ItemColumn">
                            Eliminar
                        </div>
                        <div className="ItemColumn">
                            Mas informacion
                        </div>
                        <div className="ItemColumn">
                            comparar
                        </div>
                    </div>

                </div>
                <div className="PriceColumn">
                    <div>
                        Precio
                    </div>
                    <div>
                        37.500
                    </div>
                </div>
            </div>
        );
    }
}


export default Carrito;