import { React } from 'react';
import { Link, NavLink } from "react-router-dom";

import logo from './../../../images/Logo/bco sin fondo.png';

import './Navbar.css';



function Navbar(){
    return(
      <>
        <div className='my-header'>
            <div className="navbar navbar-expand-lg navbar-light my-navbar" >
                <div className="container-fluid">
                    <Link to="/"> <img src={logo} width="120px" height="100px" alt="logo" /></Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav justify-content-end">
                                <li className='nav-item'>
                                    <NavLink to="/" className='my-link'>Inicio</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="/nosotros" className='my-link'>¿Quiénes somos?</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="/modelos" className='my-link'>Modelos</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="/contacto" className='my-link'>Contacto</NavLink>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
      </>  
    );
}
export default Navbar;