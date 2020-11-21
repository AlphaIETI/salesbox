import React from "react";
import Carousel from "react-elastic-carousel";
import CardItem from "./cardItem";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];



export default function CarouselComponent(props) {
  
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{props.tipo}</h1>
      <div className="AppCarousel">
        <Carousel focusOnSelect={true} breakPoints={breakPoints}>
            {props.promotions.map(pr =>
                <CardItem key={props.promotions.indexOf(pr)} pr={pr}/>
            )}
        </Carousel>
      </div>
    </>
  );
}