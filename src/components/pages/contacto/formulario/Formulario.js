import React, {useRef} from 'react';
import './Formulario.css';
import emailjs from '@emailjs/browser';
import {Toaster, toast} from 'react-hot-toast';

function Formulario(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const api_key = 'XKw0QrIt8x3hxljfq'
        const serviceId='default_service';
        const templateId='template_uf52d0p';

        const myPromise = emailjs.sendForm(serviceId, templateId, form.current, api_key)
        toast.promise(myPromise,
             {
               loading: 'Enviando Mensaje...',
               success: <b>Mensaje Enviado!</b>,
               error: <b>EDemoras en el servidor, por favor intente más tarde.</b>,
             },
             {
                 style:{
                     minWidth:'250px'
                 },
                 success:{
                     duration:5000,
                     icon:'🔥'
                 }
             }
           );
      };
      

    return(
            <div className='col'>
                <div className="flex-titulos">
                    <div><h1>Envíanos un mensaje</h1></div>
                    <div><h2>Te responderemos lo más pronto posible</h2></div>
                </div>

                <div className="div-form">
                    <form ref={form} id="form" name="form" onSubmit={sendEmail}>
                        <div className="elemento">
                            <input type="text" id="name" name="name" required placeholder="Nombre"/>
                        </div>
                        
                        <div className="elemento">
                            <input type="email" name="email" placeholder="E-mail" required/>
                        </div>  

                        <div className="pregunta">   
                            <textarea name="message" id="message"  placeholder="Mensaje" required></textarea>
                        </div>   
                        
                        <div className="promociones">
                            <label  className='label-promo'>¿Desea recibir promociones y/o descuentos?</label>
                            <input  type="checkbox" name="promotions" id="promotions"/>
                        </div>    
                        <div className="elemento">
                            <input type="submit" value="Enviar"/>
                            <input type="reset" value="Limpiar"/>
                        </div>    
                    </form>  
                </div>  
                <Toaster position="bottom-center" reverseOrder={true}/>
            </div>
    );
}
export default Formulario;