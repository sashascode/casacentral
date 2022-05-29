import React from 'react';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/contactofinal.jpg';
import './Contacto.css';
import Formulario from './formulario/Formulario';
import DatosDeContacto from './datosDeContacto/DatosDeContacto';


function Contacto(){
    return(
        <>
            <Encabezado title="¡Háblanos y te asesoraremos!" fondo={fondo}/>
            <div className="container d-flex justify-content-center align-items-center h-100" style={{padding:'5rem 1rem'}}>
                <DatosDeContacto/>
                <Formulario/>
            </div>
        </>
    );
}
export default Contacto;