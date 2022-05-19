import React from "react";
import Card from "./Card";

import image1 from "../../../../../images/testimonios/entrega1.jpg";
import image2 from '../../../../../images/testimonios/entrega2.jpg'
import image3 from '../../../../../images/testimonios/entrega3.jpg'

const cards = [
  {
    id: 1,
    title: "Maxi Rivera",
    image: image1,
    text:"Sin palabras, los productos y servicios de Casacentraldeplanesdeahorroparafinesdeterminados son increíbles, llegue por recomendación de un amigo hace tiempo atrás y me sorprendió la calidad, atención y asesoramiento ¡los super recomiendo!"  
  },
  {
    id: 2,
    title: "Iris Acuña",
    image: image2,
    text:"Fueron increíbles, son excelentes y muy profesionales, los productos y servicios son de suma calidad, yo sin dudas los voy a seguir eligiendo durante muchos años más ¡Muchas gracias!"  
  },
  {
    id: 3,
    title: "Araceli Galliardi",
    image: image3,
    text:"Sin dudas la mejor calidad y precio que yo conozco, quede 100% satisfecha y no paro de recomendarlos, son una empresa seria que ofrece productos y servicios de muy buena calidad."
  },
];

function Cards() {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text}/>
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