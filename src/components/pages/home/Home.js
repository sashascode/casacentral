import React from 'react';
import Entregas from './entregas/Entregas';
import Encabezado from './encabezado/Encabezado';
import './Home.css';
import Testimonios from './testimonios/Testimonios';
import Marcas from './marcas/BrandContainer'
import SvgWpp from '../../../iconComponents/SvgWpp';


function Home(){
    return(
        <>
            <Encabezado/>
            <Marcas/>
            <Entregas/>
            <Testimonios/>
            <SvgWpp/>
        </>
    );
}
export default Home;