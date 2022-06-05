import React from 'react';
import './Home.css';
import Brands from './marcas/BrandContainer';
import Entregas from './entregas/Entregas';
import Encabezado from './encabezado/Encabezado';
import Testimonios from './testimonios/Testimonios';
import Pagos from './pagos/Pagos';

function Home(){
    return(
        <>
        <Encabezado/>
        <Brands/>  
        <Entregas/>
        <Testimonios/>
        <Pagos/>
        </>
    );
}
export default Home;