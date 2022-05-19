import React from 'react';
import Entregas from './entregas/Entregas';
import Encabezado from './encabezado/Encabezado';

import './Home.css';
import Testimonios from './testimonios/Testimonios';


function Home(){
    return(
        <>
        <Encabezado/>
        <Entregas/>
        <Testimonios/>
        </>
    );
}
export default Home;