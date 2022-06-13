import {useParams} from 'react-router-dom';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/modelosfinal.jpg';
import './Modelos.css';
import ModelosIcons from './modelosMarca/ModelosIcons';
//Imagenes FIAT
import Argo from '../../../images/fiat/argo.png'
import Cronos from '../../../images/fiat/cronos.png'
import Ducato from '../../../images/fiat/ducato.png'
import Fiorino from '../../../images/fiat/fiorino.png'
import Mobi from '../../../images/fiat/mobi.png'
import Strada from '../../../images/fiat/strada.png'
import Toro from '../../../images/fiat/toro.png'
import Uno from '../../../images/fiat/uno.png'
//Imagenes VW
import Taos from '../../../images/volkswagen/taos.png'
//Imagenes RENAULT
import Sandero from '../../../images/renault/sandero.png'
//JEEP
import Renegade from '../../../images/fiat/renegade.webp'
import Compass from '../../../images/fiat/compass.webp'
//citroen
import C3 from '../../../images/fiat/c3.webp'
import C4 from '../../../images/fiat/C4.webp'



const fiat = [{ name: 'argo', icon: Argo, id: 81, marca: 'fiat'}, {name: 'cronos', icon: Cronos, id: 82, marca: 'fiat'}, {name: 'ducato', icon: Ducato, id: 83, marca: 'fiat'}, {name: 'fiorino', icon: Fiorino, id: 84, marca: 'fiat'}, {name: 'mobi', icon: Mobi, id: 85, marca: 'fiat'}, {name: 'strada', icon: Strada, id: 86, marca: 'fiat'}, {name: 'toro', icon: Toro, id: 87, marca: 'fiat'}, {name: 'uno', icon: Uno, id: 88, marca: 'fiat'}];
const volkswagen = [{name: 'taos', icon: Taos, id: 89, marca: 'volkswagen'}];
const renault = [{name: 'sandero', icon: Sandero, id: 90, marca: 'renault'}];
const jeep = [{name: 'renegade', icon: Renegade, id: 91, marca: 'jeep'}, {name: 'compass', icon: Compass, id: 93, marca: 'jeep'}];
const citroen = [{name: 'c3', icon: C3, id: 99, marca: 'citroen'}, {name: 'c4-cactus', icon: C4, id: 98, marca: 'citroen'}];
const all = fiat.concat(volkswagen, renault, jeep, citroen);

function Modelos(){
    const {marcaId} = useParams();

    if(marcaId === 'fiat'){
        return(
            <>
                <Encabezado title="Modelos FIAT" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={fiat}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'citroen'){
        return(
            <>
                <Encabezado title="Modelos CITROEN" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={citroen}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'jeep'){
        return(
            <>
                <Encabezado title="Modelos JEEP" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={jeep}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'volkswagen'){
        return(
            <>
                <Encabezado title="Modelos VOLKSWAGEN" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={volkswagen}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'renault'){
        return(
            <>
                <Encabezado title="Modelos RENAULT" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={renault}/>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Encabezado title="Modelos" fondo={fondo}/> 
            <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
            <div class="container">
                <div class="grid-container">
                    <ModelosIcons icons={all}/>
                </div>
            </div>
        </>
    );
}
export default Modelos;