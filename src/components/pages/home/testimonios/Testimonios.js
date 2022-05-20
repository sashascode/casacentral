import React from 'react';
import Cards from './cards/Cards';
import './Testimonios.css';

function Testimonios(){
    return(
        <>
            <section className='my-section'>
                <h1 className='my-title'>Nuestros Clientes</h1>
                <Cards/>
            </section>
        </>
    );
}
export default Testimonios;