import React from "react";
import Card from "./Card";

import image1 from "../../../../../images/testimonios/entrega1.jpeg";
import image2 from '../../../../../images/testimonios/entrega2.jpeg'
import image3 from '../../../../../images/testimonios/entrega3.jpeg'

const cards = [
  {
    id: 1,
    title: "Paez, Lucas",
    image: image1  
  },
  {
    id: 2,
    title: "Lima, Alfredo",
    image: image2  
  },
  {
    id: 3,
    title: "Rodriguez, Lucas",
    image: image3
  },
];

function Cards() {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
       <a
          href="https://www.instagram.com"
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
        Ver Más
        </a>
    </>
  );
}

export default Cards;