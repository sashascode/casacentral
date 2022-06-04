import React from 'react';
import './DatosDeContacto.css';
import {ImPhone} from 'react-icons/im';
import {ImWhatsapp} from 'react-icons/im';
import {ImMail4} from 'react-icons/im';
import {ImTarget} from 'react-icons/im';
import {ImHourGlass} from 'react-icons/im';
import {ImFacebook2} from 'react-icons/im';
import {ImInstagram} from 'react-icons/im';


function DatosDeContacto(){
    return(
            <div className='col div-contacto'>
                <h1 className='titulo-de-contacto'>Datos de Contacto</h1>

                <div>

                <div className='d-flex p2' style={{padding:'2rem 1rem 1rem 1rem'}}>
                    <div className='btn-grey'>
                        <i className='col'><ImPhone/></i>
                    </div>
                    <span className='text-sm ps-3 description-datos'>0800-345-5615</span>
                </div>

                <div className='d-flex p2' style={{padding:'0rem 1rem 1rem 1rem'}}>
                    <div className='btn-grey'>
                        <i className='col'><ImWhatsapp/></i>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=5491167927272&text=Me%20interesa%20saber%20mas%20sobre%20Casa%20Central' className='text-sm ps-3 description-datos'>(+54) 11-6792-7272</a>
                </div>

                <div className='d-flex p2' style={{padding:'0rem 1rem 1rem 1rem'}}>
                    <div className='btn-grey'>
                        <i className='col'><ImMail4/></i>
                    </div>
                    <span className='text-sm ps-3 description-datos'>informes@casacentral.com</span>
                </div>
                
                <div className='d-flex p2' style={{padding:'0rem 1rem 1rem 1rem'}}>
                    <div className='btn-grey'>
                        <i className='col'><ImTarget/></i>
                    </div>
                    <span className='text-sm ps-3 description-datos'>Av Castro Barros 1196 Piso 3</span>
                </div>

                <div className='d-flex p2' style={{padding:'0rem 1rem 1rem 1rem'}}>
                    <div className='btn-grey'>
                        <i className='col'><ImHourGlass/></i>
                    </div>
                    <span className='text-sm ps-3 description-datos'>Lunes a sabado 08 a 21 hs</span>
                </div>

                <div className='d-flex p2' style={{padding:'0rem 1rem 1rem 1rem'}}>
                    <div className='btn-grey'>
                        <i className='col'><ImFacebook2/></i>
                    </div>
                    <a href='https://www.facebook.com/' className='text-sm ps-3 description-datos'>
                        Ir a nuestro Facebook
                    </a>
                </div>

                <div className='d-flex p2' style={{padding:'0rem 1rem 1rem 1rem'}}>
                    <div className='btn-grey'>
                        <i className='col'><ImInstagram/></i>
                    </div>
                    <a href='https://www.instagram.com/' className='text-sm ps-3 description-datos'>
                        Ir a nuestro Instagram
                    </a>
                </div>

                </div>  
            </div>        
    );
}
export default DatosDeContacto;