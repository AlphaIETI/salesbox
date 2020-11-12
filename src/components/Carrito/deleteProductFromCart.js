import React, {useState} from 'react';
import axios from 'axios';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Button } from 'reactstrap';

export default function deleteProductFromCart(props){

    const handleDeleteItem = async() => {

        let user = {};
        

        await axios.get('https://salesbox-alpha-backend.herokuapp.com/clients/email/'+localStorage.getItem('emailClient'))
			.then(res => {
				user = res.data
				})

        //user.cart.push(props.idProduct); // buscar como eliminar producto de la lista
        user.cart.pop();

        const newUser = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            coupons: user.coupons,
            phone: user.phone,
            address: user.address,
            age:user.age,
            sizeUp: user.sizeUp,
            sizeDown:user.sizeDown,
            shoeSize:user.shoeSize,
            cart: user.cart,
            favorites: user.favorites
        }

        
        fetch('https://salesbox-alpha-backend.herokuapp.com/clients', { 
            method:'PUT',
            headers:{
                'Content-Type': 'application/json ',
                'Accept': 'application/json',
              },
            body:JSON.stringify(newUser),
        }).then(function(response) {              
            if(response.ok){
                response.json().then(function(res) {
                    console.log(res);
                })
            }else{
                console.log('Respuesta de red OK pero respuesta HTTP no OK');
            }
            props.efecinco(1);
        }).catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
    }

    return(
        <div style={{float:'left'}}>
            <Button onClick={handleDeleteItem}>
                <DeleteForeverIcon ></DeleteForeverIcon>
            </Button>
        </div>
    );

}



