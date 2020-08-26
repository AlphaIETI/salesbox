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
            <table className="tabla">
                <tbody className="body">
                    <tr>
                        <td className="columnaCheckBox">
                            <Checkbox/>
                        </td>
                        <td className="columnaImagen">
                            <img src={dino} className="ima-dino"/>
                        </td>
                        <td className="columnaTexto">
                            audifonos inalambricos para jugar los mejores juegos que existen dfgdfgdsf
                        </td>
                        <td className="columnaPrecio">
                            $37.000
                        </td>
                    </tr>
                    <tr>
                        <td className="columnaCheckBox">
                            <Checkbox/>
                        </td>
                        <td className="columnaImagen">
                            <img src={dino2} className="ima-dino"/>
                        </td>
                        <td className="columnaTexto">
                            audifonos inalambricos para jugar los mejores juegos que existen dfgdfgdsf
                        </td>
                        <td className="columnaPrecio">
                            $317.000
                        </td>
                    </tr>
                    <tr>
                        <td className="columnaCheckBox">
                            <Checkbox/>
                        </td>
                        <td className="columnaImagen">
                            <img src={dino3} className="ima-dino"/>
                        </td>
                        <td className="columnaTexto">
                            audifonos inalambricos para jugar los mejores juegos que existen dfgdfgdsf
                        </td>
                        <td className="columnaPrecio">
                            $37.000
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


export default Carrito;