import React from 'react';
import './Formulario.css';

function Formulario(){
    return(
            <div className='col'>
                <div className="flex-titulos">
                    <div><h1>Envíanos un mensaje</h1></div>
                    <div><h2>Te responderemos lo más pronto posible</h2></div>
                </div>

                <div className="div-form">
                    <form action="https://formsubmit.co/brunoredzio@hotmail.com" id="formulario" name="form" method="POST">
                        <div className="elemento">
                            <input type="text" id="nombre" name="nombre" required="True" placeholder="Nombre"/>
                        </div>
                        
                        <div className="elemento">
                            <input type="email" name="email" placeholder="E-mail" required="True"/>
                        </div>  

                        <div className="pregunta">   
                            <textarea name="comentarios" placeholder="Pregunta" required="1"></textarea>
                        </div>   
                        
                        <div className="promociones">
                            <label for="newsletter" className='label-promo'>¿Desea recibir promociones y/o descuentos?</label>
                            <input  type="checkbox" name="newsletter" value="1"/>
                        </div>    
                        <div className="elemento">
                            <input type="submit" value="Enviar"/>
                            <input type="reset" value="Limpiar"/>
                        </div>    
                    </form>  
                </div>  
            </div>
    );
}
export default Formulario;