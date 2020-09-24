import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardList from "./CardList";
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