import {useParams} from 'react-router-dom';
import Encabezado from '../../shared/encabezado/Encabezado';
import fondo from '../../../images/modelosfinal.jpg';
import './Modelos.css';


function Modelos(){
    const {marcaId} = useParams();

    return(
        <>
        <Encabezado title="Modelos" fondo={fondo}/>
        <div className='container-title'>
            <p className='title modelos'> { marcaId ? marcaId : 'MODELOS'} </p>
        </div>    
        </>
    );
}
export default Modelos;