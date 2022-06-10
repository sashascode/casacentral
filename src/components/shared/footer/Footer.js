import React from 'react';
import './Footer.css';
import Mp from '../../../images/medios-de-pago-suma(2) (1).png'


function Footer(){
    return(
      <>
        <footer className="footer d-flex flex-row justify-content-around"> 
          <img src={Mp} alt='medios de pago'/>
          <p>Copyright 2022 Casa Central - Argentina. Todos los derechos reservados</p>
        </footer>
      </>  
    );
}
export default Footer;