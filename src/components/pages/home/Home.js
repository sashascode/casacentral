import React from 'react';
import Entregas from './entregas/Entregas';
import './Home.css';


function Home(){
    return(
        <>
        <div className='container-title'>
            <p className='title'>HOME</p>
        </div>    
        <Entregas/>
        </>
    );
}
export default Home;