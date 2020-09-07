import React from 'react';

import th from '@material-ui/core/TableHead';
import tr from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import saco from '../../img/saco.jpg';
import "./ListaCarrito.css";




export default function ListaCarrito(){

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
                <div className="DescriptionColumnCant">
                    <div className="ItemColumn">
                        <button className='button'>-</button>
                        <label>3</label>
                        <button className='button'>+</button>
                    </div>
                    <div className="ItemColumn">

                    </div>
                    <div className="ItemColumn">

                    </div>
                </div>
                <div className="DescriptionColumnItems">
                    <div className="ItemColumn">
                        <button className='button'>Eliminar</button>
                    </div>
                    <div className="ItemColumn">
                        <button className='button'>Información</button>
                    </div>
                    <div className="ItemColumn">
                        <button className='button'>Comparar</button>
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
