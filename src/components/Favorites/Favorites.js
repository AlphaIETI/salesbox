import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GeneralAppBar from "../Carrito/GeneralAppBar";
import Divider from '@material-ui/core/Divider';
import FavoriteList from './FavoriteList.js';
import axios from 'axios';



export default function Favorites(){

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

    useEffect( () => {

		axios.get('https://salesbox-alpha-backend.herokuapp.com/clients/email/'+localStorage.getItem('emailClient'))
			.then(res => {
                setClientCart(res.data)
				})
        }, []);

    const favoritos = Object.values(clientCart.favorites)


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
                    {favoritos.map(item =>{
                    return(<FavoriteList favoritos={item} key={item}/>)
                })}
                    <Divider />
                </Typography>
            </Container>
            <br/>
        </React.Fragment>
    );
}
