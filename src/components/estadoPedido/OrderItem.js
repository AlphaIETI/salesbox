import React, {useState, useEffect} from 'react';
import {CardImg, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';


export default function Item(props){

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
            </Row>
        </Container>
    )
}