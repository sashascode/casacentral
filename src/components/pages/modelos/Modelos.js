import {useParams} from 'react-router-dom';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/modelosfinal.jpg';
import './Modelos.css';
import Brands from '../home/marcas/BrandContainer';
import ModelosNav from './ModelosNav';
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



const fiat = [{ name: 'argo', icon: Argo, id: 81, marca: 'fiat'}, {name: 'cronos', icon: Cronos, id: 82, marca: 'fiat'}, {name: 'ducato', icon: Ducato, id: 83, marca: 'fiat'}, {name: 'fiorino', icon: Fiorino, id: 84, marca: 'fiat'}, {name: 'mobi', icon: Mobi, id: 85, marca: 'fiat'}, {name: 'strada', icon: Strada, id: 86, marca: 'fiat'}, {name: 'toro', icon: Toro, id: 87, marca: 'fiat'}, {name: 'uno', icon: Uno, id: 88, marca: 'fiat'}];
const volkswagen = [{name: 'taos', icon: Taos, id: 89, marca: 'volkswagen'}];
const renault = [{name: 'sandero', icon: Sandero, id: 90, marca: 'renault'}];
const all = fiat.concat(volkswagen, renault);

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