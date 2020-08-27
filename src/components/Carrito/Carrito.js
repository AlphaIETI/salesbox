import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import dino from '../../img/dino.jpg';
import "./Carrito.css";
export class Carrito extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){

        return(
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Checkbox
                        />
                    </TableCell>
                    <TableCell>
                        <img src={dino} className="ima-dino"/>
                    </TableCell>
                    <TableCell>
                        <img src={dino} className="ima-dino"/>
                    </TableCell>
                    <TableCell>
                        <img src={dino} className="ima-dino"/>
                    </TableCell>

                </TableRow>
            </TableHead>
        );
    }
}


export default Carrito;