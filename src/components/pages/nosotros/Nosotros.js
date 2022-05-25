import React from 'react';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/nosotrosfinal.jpg';
import './Nosotros.css';


function Nosotros(){
    return(
        <>
            <Encabezado title="Somos un equipo de valientes" fondo={fondo}/>
            <div style={{height:"550px"}}></div>
        </>
    );
}
export default Nosotros;