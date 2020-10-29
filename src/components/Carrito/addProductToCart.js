import React from 'react';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

export default function addProductToCart(props){

    const handleAddProductCarrito = () => {

        const user = {
            id: "4",
            name: "Juliana",
            lastname: "Garzon",
            mail: "Juliana@hotmail.com",
            password: "4444",
            coupons: "3",
            phone: "3105845162",
            address: "cra 36c # 85 - 75",
            carrito:["5f9a0db53dd3f81a6156ad16","5f9a16ef3dd3f81a6156ad1b"],
            favoritos:["5f9a0db53dd3f81a6156ad16","5f9a16ef3dd3f81a6156ad1b"],
            }

        //let currentUser = localStorage.getItem(user);

        //let newCart = user.carrito.push(props.idProduct);
        let newCart = user.carrito.push("5f9a1fc03dd3f81a6156ad1f"); //cambiar idProduct

        let newUser = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            mail: user.mail,
            password: user.password,
            coupons: user.coupons,
            phone: user.phone,
            address: user.address,
            carrito: newCart,
            favoritos: user.favoritos,
        }

        

        fetch('https://salesbox-alpha-backend.herokuapp.com/clients', { 
            method:'PUT',
            headers:{
              'Content-Type': 'application/json ',
              'Accept': 'application/json',
            },
            body:JSON.stringify(newUser)
          }).then(function(response) {
                if(response.ok){
                    response.json().then(function(res) {
                        console.log(res);
                    })
                }else{
                    console.log('Respuesta de red OK pero respuesta HTTP no OK');
                }
            }).catch(function(error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
            });
    }

    return(
        <div>
            {localStorage.getItem.isLoggedIn ? 
            <Button color="secondary" onClick={handleAddProductCarrito}>
                Añadir  <AddShoppingCartOutlinedIcon fontSize="small"/> 
            </Button>
            :null}
            
        </div>
    );

}




















