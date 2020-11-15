import React, {useState, useEffect} from 'react';
import {CardImg, CardBody,CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from 'axios';
import DeleteButton from '../Favorites/deleteProductFromFavs.js';

export default function FavItem(props){

    const imageItem = {
        padding:'10px'
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
        "price":"",
        "discount":"",
        "image":"",
        "size":"",
        "category":"",
        "gender":"",
        "stockAvailable":""
    });

    useEffect( () => {

		axios.get('https://salesbox-alpha-backend.herokuapp.com/products/'+props.favoritos)
			.then(res => {
                setItemData(res.data)
				})
        }, []);

    return(
        <Container style={{background:'white'}}>
            <Row>
                <Col xs='auto' padding='30px 40px'>
                    <Link>
                        <AddShoppingCartIcon/>
                    </Link>
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
                        <CardSubtitle style={textStyle}>${itemData.price}</CardSubtitle>
                    </CardBody>
                </Col>
                <Col>
                    <Row>
                        <DeleteButton idproduct={props.favoritos} efecinco={props.efecinco}></DeleteButton>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}