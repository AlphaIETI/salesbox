import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GeneralAppBar from "../Carrito/GeneralAppBar";
import Divider from '@material-ui/core/Divider';
import FavoriteList from './FavoriteList.js';


export default function Favorites(){

    const [favItemsSelected, modifySelectedItems] = useState(
        [
            {
                id: 2021,
                imagen:'Blusa',
                descripcion: 'Blusa negra para mujer',
                precio:20000
            },
            {
                id: 2204,
                imagen:'CamisetaCK',
                descripcion: 'Camiseta CK para hombre',
                precio: 69000
            },
            {
                id: 2203,
                imagen:'Zapatos',
                descripcion: 'Zapatos para hombre',
                precio: 74000
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
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100hv' }}>
                    {favItemsSelected.map(item =>{
                    return(<FavoriteList favoritos={item}/>)
                })}
                    <Divider />
                </Typography>
            </Container>
            <br/>
        </React.Fragment>
    );
}
