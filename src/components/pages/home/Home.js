import React from 'react';
import Entregas from './entregas/Entregas';
import Brands from './Brands';
import './Home.css';


function Home(){
    return(
        <>
        <div className='container-title'>
            <p className='title'>HOME</p>
        </div>    
        <div className='container-title'>
                <p className='title' style={{fontSize: '20px'}}>Nuestras Marcas</p>
                <Brands/>  
        </div>  
        <Entregas/>
        </>
    );
}
export default Home;