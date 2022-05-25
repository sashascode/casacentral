import React from 'react';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/contactofinal.jpg';
import './Contacto.css';


function Contacto(){
    return(
        <>
            <Encabezado title="¡Háblanos y te asesoraremos!" fondo={fondo}/>
            <div style={{height:"550px"}}></div>

        </>
    );
}
export default Contacto;