import React from 'react';
import './Encabezado.css';


function Encabezado(props){
    const {title, fondo}=props;
    
    return(
        <section  className='encabezado-section'style={{backgroundImage: `url(${fondo}`}}>
            <div className='encabezado-div'>
                <h1 className='encabezado-h1'>{title}</h1>
            </div>
        </section>
    );
}
export default Encabezado;