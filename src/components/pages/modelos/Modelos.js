import {useParams} from 'react-router-dom';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/modelosfinal.jpg';
import './Modelos.css';
import Brands from '../home/marcas/BrandContainer';
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


const fiat = [{ name: 'argo', icon: Argo}, {name: 'cronos', icon: Cronos}, {name: 'ducato', icon: Ducato}, {name: 'fiorino', icon: Fiorino}, {name: 'mobi', icon: Mobi}, {name: 'strada', icon: Strada}, {name: 'toro', icon: Toro}, {name: 'uno', icon: Uno}];
const volkswagen = [{name: 'taos', icon: Taos}];
const renault = [{name: 'sandero', icon: Sandero}];

function Modelos(){
    const {marcaId} = useParams();

    if(marcaId === 'fiat'){
        return(
            <>
                <Encabezado title="Modelos FIAT" fondo={fondo}/>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={fiat} marca={marcaId}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'volkswagen'){
        return(
            <>
                <Encabezado title="Modelos VOLKSWAGEN" fondo={fondo}/>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons marca={marcaId} icons={volkswagen}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'renault'){
        return(
            <>
                <Encabezado title="Modelos RENAULT" fondo={fondo}/>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons marca={marcaId} icons={renault}/>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
        <Encabezado title="Modelos" fondo={fondo}/>
        <Brands/>  
        </>
    );
}
export default Modelos;