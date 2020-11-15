import React, {useState, useEffect} from 'react';
import {CardImg, CardBody,CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import DeleteButton from '../Carrito/deleteProductFromCart.js';

export default function Item(props){

    const [cantidad, setcantidad] = useState(1);

    function restaCantidad(){
        if(cantidad>1){
            setcantidad(cantidad-1);
            props.changePrecio(-itemData.price)
        }
    }

    function sumaCantidad(){
        if(cantidad<99){
            setcantidad(cantidad+1);
        }
        props.changePrecio(itemData.price);
    }

    const imageItem = {
        
    }

    const textStyle = {
        fontSize: '24px',
        textAlign: 'center',
        color: 'black'
    }

    const [itemData, setItemData] = useState(
        {"id":"",
        "brand":"",
        "description":"",
        "color":"",
        "price":0,
        "discount":"",
        "image":"",
        "size":"",
        "category":"",
        "gender":"",
        "stockAvailable":""
    });

    function handleOnLoad (){
        props.changePrecio(itemData.price);
    }

    useEffect( () => {

		axios.get('https://salesbox-alpha-backend.herokuapp.com/products/'+ props.currentItem)
			.then(res => {
                setItemData(res.data)
				})
        }, []);

        
    return(
        <Container onLoad={handleOnLoad} style={{background:'white'}}>
            <Row>
                <Col xs='auto'>                 
                    <DeleteButton idproduct={props.currentItem} efecinco={props.efecinco} precioItem={itemData.price} changePrecio={props.changePrecio} cantidadItem={cantidad}></DeleteButton>
                </Col>
                <Col >
                    <CardImg style={imageItem} src={itemData.image} alt="Missing Pic"/>
                </Col>
                <Col xs='auto' style={imageItem}>
                    <CardBody >
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>{itemData.description}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>${itemData.price*cantidad}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col>
                    <CardBody >
                        <ButtonGroup>
                            <Button onClick={restaCantidad}>-</Button>
                                <span style={{color:"black", fontSize:'25px', width:'30px', textAlign:'center'}}>{cantidad}</span>
                            <Button onClick={sumaCantidad}>+</Button>
                        </ButtonGroup> 
                    </CardBody>
                </Col>
            </Row>
        </Container>
    )
}