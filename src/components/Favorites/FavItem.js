import React, {useState} from 'react';
import {CardImg, CardBody,CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Blusa from '../../img/Blusa.jpg';
import CamisetaCK from '../../img/CamisetaCK.jpg';
import Zapatos from '../../img/Zapatos.jpg';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function FavItem(props){

    const imageItem = {
        padding:'10px'
    }

    const textStyle = {
        fontSize: '24px',
        textAlign: 'center',
        color: 'black'
    }

    const icons = { Blusa, CamisetaCK, Zapatos };

    return(
        <Container style={{background:'white'}}>
            <Row>
                <Col xs='auto' padding='30px 40px'>
                    <Link>
                        <AddShoppingCartIcon ></AddShoppingCartIcon>
                    </Link>
                </Col>
                <Col >
                    <CardImg style={imageItem} src={icons[props.favoritos.imagen]} alt="Missing Pic"/>
                </Col>
                <Col xs='6' style={imageItem}>
                    <CardBody >
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>{props.favoritos.descripcion}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col style={imageItem}>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle style={textStyle}>${props.favoritos.precio}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col>
                    <Row>
                        <Link>
                            <DeleteOutlineIcon fontSize='large' ></DeleteOutlineIcon>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}