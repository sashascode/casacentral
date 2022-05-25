import React from 'react';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/nosotrosfinal.jpg';
import './Nosotros.css';
import Valores from './valores/Valores';


function Nosotros(){
    return(
        <>
            <Encabezado title="Somos un equipo de valientes" fondo={fondo}/>
            <Valores/>
        </>
    );
}
export default Nosotros;