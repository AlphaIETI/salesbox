import React, {useState} from 'react';
import {CardImg, CardBody,CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Saco from '../../img/saco.jpg';
import Saco2 from '../../img/saco2.jpg';
import CamisetaBlanca from '../../img/camisetaBlanca.jpg';
import CamisetaNegra from '../../img/camisetaNegra.jpg';


export default function Item(props){

    const [cantidad, setcantidad] = useState(props.tarea.cantidad);

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

    const icons = { Saco, Saco2, CamisetaBlanca, CamisetaNegra };

    return(
        <Container style={{background:'white'}}>
            <Row>
                <Col xs='auto'>
                    <input type='checkbox'></input>
                </Col>
                <Col >
                    <CardImg style={imageItem} src={icons[props.tarea.imagen]} alt="Missing Pic"/>
                </Col>
                <Col xs='6' style={imageItem}>
                    <CardBody >
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>{props.tarea.descripcion}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col style={imageItem}>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>${props.tarea.precio}</CardSubtitle>
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