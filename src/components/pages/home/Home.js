import React from 'react';
import './Home.css';
import Brands from './marcas/BrandContainer';
import Entregas from './entregas/Entregas';
import Encabezado from './encabezado/Encabezado';
import Testimonios from './testimonios/Testimonios';


function Home(){
    return(
        <>
        <Encabezado/>
        <Brands/>  
        <Entregas/>
        <Testimonios/>
        </>
    );
}
export default Home;