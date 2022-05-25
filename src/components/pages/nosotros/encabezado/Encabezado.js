import React from 'react';
import './Encabezado.css';
import fondo from '../../../../images/homefinal.jpg'
import { Link } from "react-router-dom";


function Encabezado(){
    return(
        <>
        <section className='my-section-principal' style={{backgroundImage: `url(${fondo}`}}>
            <div className='my-div-principal'>
                <h1 className='my-title-principal'>El mejor servicio<br/> lo vas a encontrar aquí</h1>
                <h2 className='my-h2'>Nuevos | Usados | Planes de ahorro</h2>
                <div className="div-botones">
                    <Link to="./modelos" className="btn btn-light btn-lg active botones my-button" role="button" aria-pressed="true">Modelos</Link>
                </div>

            </div>
        </section>
        </>
    );
}
export default Encabezado;