import React, {useState} from 'react';
import {Card,CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import saco from '../../img/saco.jpg';

export default function Item(){

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
    return(
        <Container style={{background:'white'}}>
            <Row>
                <Col xs='auto'>
                    <input type='checkbox'></input>
                </Col>
                <Col >
                    <CardImg style={imageItem} src={saco} alt="Missing Pic"/>
                </Col>
                <Col xs='6' style={imageItem}>
                    <CardBody >
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>Saco Gris Hoodie para Hombre</CardSubtitle>
                    </CardBody>
                </Col>
                <Col style={imageItem}>
                    <CardBody >
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>37.500</CardSubtitle>
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