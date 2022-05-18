import React from 'react';
import Brands from '../../Marcas/BrandContainer';
import './Home.css';


function Home(){
    return(
        <>
            <div className='container-title'>
                <p className='title' style={{fontSize: '20px'}}>Nuestras Marcas</p>
                <Brands/>  
            </div>  
        </>
    );
}
export default Home;