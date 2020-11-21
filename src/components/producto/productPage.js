import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './productImage';
import ProductInfo from './productInfo';


export default function ProductPage(props) {

  
    const [Product, setProduct] = useState([{price:1000,sold:10,views:50,description:"hola",images:["https://dafitistaticco-a.akamaihd.net/p/nike-3236-2488211-1-product.jpg","https://dafitistaticco-a.akamaihd.net/p/nike-4643-6069211-1-product.jpg","https://dafitistaticco-a.akamaihd.net/p/nike-9709-1532511-1-product.jpg"]}]) 

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Hola</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} xs={24}>
                <ProductInfo
                        detail={Product} />
                </Col>
            </Row>
        </div>
    )
}

