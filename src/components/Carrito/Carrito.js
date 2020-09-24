import React, {useState} from 'react';
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
                imagen:'imagen de saco',
                descripcion: 'Saco',
                precio: 37000
            },
            {
                id: 2204,
                imagen:'imagen de camisa',
                descripcion: 'camisa basica blanca',
                precio: 20000
            }
        ]
    )


    return(
        <React.Fragment>
            <CssBaseline />
            <GeneralAppBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="md">
                <CardList/>
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