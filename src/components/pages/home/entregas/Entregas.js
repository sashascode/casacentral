import React from 'react';
import './Entregas.css';
import foto1 from '../../../../images/entregas/entrega1.jpeg'
import foto2 from '../../../../images/entregas/entrega2.jpeg'
import foto3 from '../../../../images/entregas/entrega3.jpeg'
import foto4 from '../../../../images/entregas/entrega4.jpeg'
import foto5 from '../../../../images/entregas/entrega5.jpeg'
import foto6 from '../../../../images/entregas/entrega6.jpeg'
import foto7 from '../../../../images/entregas/entrega7.jpeg'
import foto8 from '../../../../images/entregas/entrega8.jpeg'
import foto9 from '../../../../images/entregas/entrega9.jpeg'



function Entregas(){
    return(
        <section className='my-section'>
            <h1 className='my-title'>Nuestras Entregas</h1>
                <div className='grid-container' data-toggle="modal" data-target="#exampleModal">
                    <div className='grid-item' style={{backgroundImage: `url(${foto1}`}} data-target="#carouselExample" data-slide-to="0"></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto2}`}} data-target="#carouselExample" data-slide-to="1"></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto3}`}} data-target="#carouselExample" data-slide-to="2"></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto4}`}}></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto5}`}}></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto6}`}}></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto7}`}}></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto8}`}}></div>
                    <div className='grid-item' style={{backgroundImage: `url(${foto9}`}}></div>

                </div>    
        </section>
    );
}
export default Entregas;