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


const fiat = [{ name: 'argo', icon: Argo, id: 81}, {name: 'cronos', icon: Cronos, id: 82}, {name: 'ducato', icon: Ducato, id: 83}, {name: 'fiorino', icon: Fiorino, id: 84}, {name: 'mobi', icon: Mobi, id: 85}, {name: 'strada', icon: Strada, id: 86}, {name: 'toro', icon: Toro, id: 87}, {name: 'uno', icon: Uno, id: 88}];
const volkswagen = [{name: 'taos', icon: Taos, id: 89}];
const renault = [{name: 'sandero', icon: Sandero, id: 90}];

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