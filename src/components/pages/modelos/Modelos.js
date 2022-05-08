import {useParams} from 'react-router-dom';
import './Modelos.css';


function Modelos(){
    const {marcaId} = useParams();

    return(
        <>
        <div className='container-title'>
            <p className='title'>MODELOS</p>
        </div>    
        </>
    );
}
export default Modelos;