import React from 'react';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/contactofinal.jpg';
import './Contacto.css';
import Formulario from './formulario/Formulario';


function Contacto(){
    return(
        <>
            <Encabezado title="¡Háblanos y te asesoraremos!" fondo={fondo}/>
            <Formulario/>
        </>
    );
}
export default Contacto;