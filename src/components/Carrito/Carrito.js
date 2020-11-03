import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardList from "./CardList";
import GeneralAppBar from "./GeneralAppBar";
import Divider from '@material-ui/core/Divider';
import PriceTotal from './PriceTotal';

export default function Carrito(){

    const [SelectedItems, modifySelectedItems] = useState(
        [
            {
                id: 2021,
                imagen:'Saco',
                descripcion: 'Saco para hombre, hoddie gris',
                precio:80000,
                cantidad: 2
            },
            {
                id: 2204,
                imagen:'Saco2',
                descripcion: 'Saco para hombre, hoddie vinotinto',
                precio: 85000,
                cantidad: 3
            },
            {
                id: 2203,
                imagen:'CamisetaBlanca',
                descripcion: 'Camiseta basica blanca',
                precio: 20000,
                cantidad: 1
            },
            {
                id: 2313,
                imagen:'CamisetaNegra',
                descripcion: 'Camiseta basica negra',
                precio: 20000,
                cantidad: 1
            }
        ]
    )

    const [TotalPrice, setTotalPrice] = useState(0);

    return(
        <React.Fragment>
            <CssBaseline />
            <GeneralAppBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="md">
                {SelectedItems.map(item =>{
                    return(<CardList tarea={item} key={SelectedItems.id}/>)
                })}
                <Divider />
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="sm">
                <PriceTotal/>
            </Container> 
            <br/>
            <br/>
            <br/>
        </React.Fragment>
    );
}