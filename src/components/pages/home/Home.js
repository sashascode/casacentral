import React from 'react';
import Brands from './marcas/BrandContainer';

import Entregas from './entregas/Entregas';
import Encabezado from './encabezado/Encabezado';

import './Home.css';
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