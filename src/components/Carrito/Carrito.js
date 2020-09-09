import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListaCarrito from "./ListaCarrito";
import GeneralAppBar from "./GeneralAppBar";
import Divider from '@material-ui/core/Divider';
import PriceTotal from './PriceTotal';

export default function Carrito(){
    return(
        <React.Fragment>
            <CssBaseline />
            <GeneralAppBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100hv' }}>
                    <ListaCarrito/>
                    <Divider />
                </Typography>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100hv' }}>
                    <PriceTotal/>
                </Typography>
            </Container>
            <br/>
            <br/>
            <br/>
        </React.Fragment>
    );
}