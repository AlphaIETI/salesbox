import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListaCarrito from "./ListaCarrito";
import GeneralAppBar from "./GeneralAppBar";
import Divider from '@material-ui/core/Divider';

export default function Carrito(){
    return(
        <React.Fragment>
            <CssBaseline />
            <GeneralAppBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100%' }}>
                    <ListaCarrito/>
                    <Divider />
                    <ListaCarrito/>
                    <Divider />
                    <ListaCarrito/>
                    <Divider />
                </Typography>
            </Container>
        </React.Fragment>
    );
}
