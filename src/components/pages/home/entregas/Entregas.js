import React from 'react';
import './Entregas.css';
import foto1 from '../../../../images/entregas/entrega1.jpeg'
import foto2 from '../../../../images/entregas/entrega2.jpeg'
import foto3 from '../../../../images/entregas/entrega3.jpeg'
import foto4 from '../../../../images/entregas/entrega4.jpeg'
import foto5 from '../../../../images/entregas/entrega5.jpeg'
import foto6 from '../../../../images/entregas/entrega6.jpeg'
import foto7 from '../../../../images/entregas/entrega7.jpeg'
import foto8 from '../../../../images/entregas/entrega8.jpeg'
import foto9 from '../../../../images/entregas/entrega9.jpeg'
import foto10 from '../../../../images/entregas/entrega10.jpeg'


function Entregas(){
    return(
        <>
            <section className='my-section'>
                <h1 className='my-title'>Nuestras Entregas</h1>
                    <div className='grid-container'>
                        <div className='grid-item' style={{backgroundImage: `url(${foto1}`}} data-bs-toggle="modal" data-bs-target="#modalImage1"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto2}`}} data-bs-toggle="modal" data-bs-target="#modalImage2"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto3}`}} data-bs-toggle="modal" data-bs-target="#modalImage3"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto4}`}} data-bs-toggle="modal" data-bs-target="#modalImage4"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto5}`}} data-bs-toggle="modal" data-bs-target="#modalImage5"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto6}`}} data-bs-toggle="modal" data-bs-target="#modalImage6"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto7}`}} data-bs-toggle="modal" data-bs-target="#modalImage7"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto8}`}} data-bs-toggle="modal" data-bs-target="#modalImage8"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto9}`}} data-bs-toggle="modal" data-bs-target="#modalImage9"></div>
                        <div className='grid-item' style={{backgroundImage: `url(${foto10}`}} data-bs-toggle="modal" data-bs-target="#modalImage10"></div>
                    </div>    
            </section>

            <div tabIndex="-1" aria-labelledby='modalImage1' aria-hidden="true" className='modal fade' id="modalImage1">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto1} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage2' aria-hidden="true" className='modal fade' id="modalImage2">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto2} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage3' aria-hidden="true" className='modal fade' id="modalImage3">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto3} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>
            
            <div tabIndex="-1" aria-labelledby='modalImage4' aria-hidden="true" className='modal fade' id="modalImage4">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto4} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage5' aria-hidden="true" className='modal fade' id="modalImage5">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto5} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage6' aria-hidden="true" className='modal fade' id="modalImage6">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto6} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage7' aria-hidden="true" className='modal fade' id="modalImage7">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto7} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage8' aria-hidden="true" className='modal fade' id="modalImage8">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto8} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage9' aria-hidden="true" className='modal fade' id="modalImage9">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto9} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex="-1" aria-labelledby='modalImage10' aria-hidden="true" className='modal fade' id="modalImage10">
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img src={foto10} width="100%" height="100%" alt="entrega a cliente"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Entregas;

