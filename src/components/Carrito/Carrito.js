import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardList from "./CardList";
import GeneralAppBar from "./GeneralAppBar";
import Divider from '@material-ui/core/Divider';
import PriceTotal from './PriceTotal';
import axios from 'axios';

export default function Carrito(){
    const [clientCart, setClientCart] = useState(
        {"id":"99999",
        "name":"",
        "lastname":"",
        "email":"",
        "password":"",
        "coupons":"",
        "phone":"",
        "address":"",
        "age":"",
        "sizeUp":"",
        "sizeDown":"",
        "shoeSize":"",
        "cart":"",
        "favorites":""
    });

    const [recargo, setRecarga] = useState(1);

    const efecinco = (change) => {
        setRecarga(recargo + change)
    }

    useEffect( () => {

		axios.get('https://salesbox-alpha-backend.herokuapp.com/clients/email/'+localStorage.getItem('emailClient'))
			.then(res => {
                setClientCart(res.data)
				})
        }, [recargo]);
        

    const carrito = Object.values(clientCart.cart)
    return(
        <React.Fragment>
            <CssBaseline />
            <GeneralAppBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth="md">
                {carrito.map(item =>{
                    return(<CardList currentItem={item} efecinco={efecinco} key={item}/>)
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