import React, { useEffect } from 'react';
import './ProductPage.css';
import Colors from './Colors'
import DetailsThumb from './DetailsThumb';
import AppBarComponent from '../dashboard/appBar';

export default function ProductPage () { 

    let urlParams = new URLSearchParams(window.location.search);
    let myParam = urlParams.get('id');
    let BACKENDAPI = 'https://salesbox-alpha-backend.herokuapp.com/';
    let myRef = React.createRef();
    const [pr, setPr] = React.useState({id:1,brand:"",images:[""],colors:["white"],description:""});
    const [imagesP, setImageP] = React.useState([pr.images])
    const [colors, setColors] = React.useState([pr.colors])
    useEffect (() => {
      fetch(BACKENDAPI+'products/'+myParam, {
          method: 'GET'
      }).then(response => response.json())
          .then(data => {
              console.log(data)
              setPr(data)
              setImageP(data.images)
              setColors(data.colors)
          }).catch(error => {
              console.log(error)
          });
      myRef.current.children[index].className = "active";
      },[]);
    
    const [index,setIndex] = React.useState(0);
    let images = [];
    const handleTab = (index) => {
        setIndex(index);
        images = myRef.current.children;
        for(let i=0; i<images.length; i++){
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    }

    return(
        <div>
            <AppBarComponent />
            <div className="app">
                <div className="details" key={pr.id}>
                    <div className="big-img">
                    <img src={pr.images[index]} alt=""/>
                    </div>
    
                    <div className="box">
                    <div className="row">
                        <h2>{pr.brand}</h2>
                        <span>${pr.price}</span>
                    </div>
                    <Colors colors={colors} />
    
                    <h2>{pr.description}</h2>
    
                    <DetailsThumb images={imagesP} tab={handleTab} myRef={myRef} />
                    <button className="cart">Añadir al Carrito</button>
    
                    </div>
                </div>
            </div>
        </div>
      );
}