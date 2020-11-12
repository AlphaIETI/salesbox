import React, {useState, useEffect} from 'react';
import {CardImg, CardBody,CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import DeleteButton from '../Carrito/deleteProductFromCart.js';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Item(props){

    const [cantidad, setcantidad] = useState(1);

    function restaCantidad(){
        if(cantidad>1){
            setcantidad(cantidad-1);
        }
    }

    function sumaCantidad(){
        if(cantidad<99){
            setcantidad(cantidad+1);
        }
        
    }
    const imageItem = {
        padding:'10px'
    }

    const textStyle = {
        fontSize: '24px',
        textAlign: 'center',
        color: 'black'
    }

    const [itemData, setItemData] = useState(
        {"id":"99999",
        "brand":"",
        "description":"",
        "color":"",
        "price":"",
        "discount":"",
        "image":"",
        "size":"",
        "category":"",
        "gender":"",
        "stockAvailable":""
    });

    useEffect( () => {

		axios.get('https://salesbox-alpha-backend.herokuapp.com/products/'+props.currentItem)
			.then(res => {
                setItemData(res.data)
				})
        }, []);

    
    return(
        <Container style={{background:'white'}}>
            <Row>
                <Col xs='auto'>                 
                    <DeleteButton efecinco={props.efecinco}></DeleteButton>
                </Col>
                <Col >
                    <CardImg style={imageItem} src={itemData.image} alt="Missing Pic"/>
                </Col>
                <Col xs='6' style={imageItem}>
                    <CardBody >
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>{itemData.description}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col style={imageItem}>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>${itemData.price}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col style={imageItem}>
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