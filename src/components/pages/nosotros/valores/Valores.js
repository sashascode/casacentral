import React from 'react';
import './Valores.css';
import {ImUsers} from 'react-icons/im';
import {ImUserTie} from 'react-icons/im';
import {ImClipboard} from 'react-icons/im';

function Valores(){
    return(
        <>
        <div className='container-valores'>
            <div className='div-valores'>
                <div className='caja-icono'>
                    <div className='btn-vision'>
                        <i className='icon-whatsapp'><ImUsers/></i>
                    </div>
                </div>
                <h1 className='h1-valores'>Visión</h1>
                <p className='text-valores'>Somos un <span className='text-resaltado'>grupo de profesionales</span> con una clara visión: <span className='text-resaltado'>satisfacer</span> a nuestros clientes, crear <span className='text-resaltado'>oportunidades, innovar</span> continuamente y ser <span className='text-resaltado'>líderes</span> en el área.</p>
            </div>

           <div className='div-valores'>
           <div className='caja-icono'>
    
                <div className='btn-mision'>
                    <i className='icon-whatsapp'><ImUserTie/></i>
                </div>
                </div>
                <h1 className='h1-valores'>Misión</h1>
                <p className='text-valores'>Somos <span className='text-resaltado'>pioneros</span> en nuestra área y estamos <span className='text-resaltado'>100% comprometidos</span> con brindar productos y servicios de <span className='text-resaltado'>calidad</span> a nuestros clientes, <span className='text-resaltado'>transparencia y sinceridad</span>.</p>
            </div>

            <div className='div-valores'>
                <div className='caja-icono'>
                    <div className='btn-calidad'>
                            <i className='icon-whatsapp'><ImClipboard/></i>
                    </div>
                </div>
                <h1 className='h1-valores'>Calidad</h1>
                <p className='text-valores'>Estamos principalmente <span className='text-resaltado'>enfocados en la confianza</span> y especialmente <span className='text-resaltado'>comprometidos</span> con el desarrollo de una actividad que logre <span className='text-resaltado'>satisfacer</span> siempre.</p>
            </div>
        </div>        
        </>
    );
}
export default Valores;