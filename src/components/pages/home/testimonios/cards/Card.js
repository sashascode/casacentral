import React from "react";

import "./Card.css";

function Card({ imageSource, title, text }) {
  return (
    <div className="card text-center tarjeta animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="cliente" className="card-img-top" />
      </div>
      <div className="card-body text-light tarjetas">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-light">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
      </div>
    </div>
  );
}
export default Card;
