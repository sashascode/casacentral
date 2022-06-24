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
import Amarok from '../../../images/volkswagen/amarok/AMAROKICON.webp'
import Gol from '../../../images/volkswagen/gol/GOL_ICON.webp'
import Nivus from '../../../images/volkswagen/nivus/NIVUSICON.webp'
import Polo from '../../../images/volkswagen/polo/POLOICON.webp'
import Saveiro from '../../../images/volkswagen/saveiro/SAVEIROICON.webp'
import Tcross from '../../../images/volkswagen/tcross/TCROSSICON.webp'
import Tiguan from '../../../images/volkswagen/tiguan/TIGUANICON.webp'
import Touareg from '../../../images/volkswagen/touareg/TOUAREGICON.webp'
import Vento from '../../../images/volkswagen/vento/ventoicon.webp'
import Virtus from '../../../images/volkswagen/virtus/VIRTUS_ICON.webp'
//Imagenes RENAULT
import Sandero from '../../../images/renault/sandero.png'
import Stepway from '../../../images/renault/stepway/stepway_icon.webp'
import Logan from '../../../images/renault/logan/logan_icon.webp'
import Duster from '../../../images/renault/duster/duster_icon.webp'
import Captur from '../../../images/renault/captur/captur_icon.webp'
import Kangoo from '../../../images/renault/kangoo/kangoo_icon.webp'
import Koleos from '../../../images/renault/koleos/koleos_icon.webp'
//JEEP
import Renegade from '../../../images/fiat/renegade.webp'
import Compass from '../../../images/fiat/compass.webp'
import Cherokee from '../../../images/jeep/cherokee/CHEROKEE_ICON.webp'
import Commander from '../../../images/jeep/commander/commander_icon.png'
import Gladiator from '../../../images/jeep/gladiator/gladiator_icon.webp'
import Wrangler from '../../../images/jeep/wrangler/WRANGLER_ICON.webp'
//citroen
import C3 from '../../../images/fiat/c3.webp'
import C4 from '../../../images/fiat/C4.webp'
import C5 from '../../../images/citroen/c5/c5_icon.webp'
import Berlingo from '../../../images/citroen/berlingo/berlingo_icon.webp'

const fiat = [{ name: 'argo', icon: Argo, id: 81, marca: 'fiat'}, {name: 'cronos', icon: Cronos, id: 82, marca: 'fiat'}, {name: 'ducato', icon: Ducato, id: 83, marca: 'fiat'}, {name: 'fiorino', icon: Fiorino, id: 84, marca: 'fiat'}, {name: 'mobi', icon: Mobi, id: 85, marca: 'fiat'}, {name: 'strada', icon: Strada, id: 86, marca: 'fiat'}, {name: 'toro', icon: Toro, id: 87, marca: 'fiat'}, {name: 'uno', icon: Uno, id: 88, marca: 'fiat'}];
const volkswagen = [{name: 'taos', icon: Taos, id: 89, marca: 'volkswagen'}, {name: 'amarok', icon: Amarok, id: 400, marca: 'volkswagen'}, {name: 'gol', icon: Gol, id: 401, marca: 'volkswagen'}, {name: 'nivus', icon: Nivus, id: 403, marca: 'volkswagen'}, {name: 'polo', icon: Polo, id: 404, marca: 'volkswagen'}, {name: 'saveiro', icon: Saveiro, id: 499, marca: 'volkswagen'}, {name: 'tcross', icon: Tcross, id: 405, marca: 'volkswagen'}, {name: 'tiguan', icon: Tiguan, id: 406, marca: 'volkswagen'}, {name: 'touareg', icon: Touareg, id: 407, marca: 'volkswagen'}, {name: 'vento', icon: Vento, id: 408, marca: 'volkswagen'}, {name: 'virtus', icon: Virtus, id: 409, marca: 'volkswagen'}];
const renault = [
    {name: 'sandero', icon: Sandero, id: 90, marca: 'renault'},
    {name: 'stepway', icon: Stepway, id: 102, marca: 'renault'},
    {name: 'logan', icon: Logan, id: 103, marca: 'renault'},
    {name: 'duster', icon: Duster, id: 104, marca: 'renault'},
    {name: 'captur', icon: Captur, id: 105, marca: 'renault'},
    {name: 'kangoo', icon: Kangoo, id: 106, marca: 'renault'},
    {name: 'koleos', icon: Koleos, id: 107, marca: 'renault'},
];
const jeep = [{name: 'renegade', icon: Renegade, id: 91, marca: 'jeep'}, {name: 'compass', icon: Compass, id: 93, marca: 'jeep'}, {name: 'cherokee', icon: Cherokee, id: 300, marca: 'jeep'}, {name: 'commander', icon: Commander, id: 301, marca: 'jeep'}, {name: 'gladiator', icon: Gladiator, id: 302, marca: 'jeep'}, {name: 'wrangler', icon: Wrangler, id: 303, marca: 'jeep'}];
const citroen = [{name: 'c3', icon: C3, id: 99, marca: 'citroen'}, {name: 'c4-cactus', icon: C4, id: 98, marca: 'citroen'}, {name: 'c5', icon: C5, id: 200, marca: 'citroen'}, {name: 'berlingo', icon: Berlingo, id: 201, marca: 'citroen'}];
const nissan = [];
const peugeot = [];
const ford = [];
const toyota = [];
const all = fiat.concat(volkswagen, renault, jeep, citroen, nissan, peugeot, ford, toyota);

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

    if(marcaId === 'nissan'){
        return(
            <>
                <Encabezado title="Modelos NISSAN" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={nissan}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'peugeot'){
        return(
            <>
                <Encabezado title="Modelos PEUGEOT" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={peugeot}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'ford'){
        return(
            <>
                <Encabezado title="Modelos FORD" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={ford}/>
                    </div>
                </div>
            </>
        )
    }

    if(marcaId === 'toyota'){
        return(
            <>
                <Encabezado title="Modelos TOYOTA" fondo={fondo}/>
                <h1 className='display-6' style={{color: 'black', marginTop: '40px'}}>Selecciona un modelo para conocerlo mejor.</h1>
                <div class="container">
                    <div class="grid-container">
                        <ModelosIcons icons={toyota}/>
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