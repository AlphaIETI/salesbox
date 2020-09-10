import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListaCarrito from "../Carrito/ListaCarrito";
import GeneralAppBar from "../Carrito/GeneralAppBar";
import Divider from '@material-ui/core/Divider';


export default function Favorites(){
    return(
        <React.Fragment>
            <CssBaseline />
            <GeneralAppBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100hv' }}>
                    <ListaCarrito/>
                    <Divider />
                </Typography>
            </Container>
            <br/>
        </React.Fragment>
    );
}
