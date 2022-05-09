import './Home.css'
//import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className='container'>
        <div className='row row-cols-5'>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/fiat_logo_icon_145827.png' alt='fiat' className='brand-logo'/>
            </div>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/peugeot_logo_icon_145787.png' alt='peugeot' className='brand-logo'/>
            </div>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/jeep_logo_icon_145814.png' alt='jeep' className='brand-logo'/>
            </div>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/citroen_logo_icon_145834.png' alt='citroen' className='brand-logo'/>
            </div>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/ford_logo_icon_145825.png' alt='ford' className='brand-logo'/>
            </div>
        </div>

        <div className='row row-cols-5'>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/volkswagen_logo_icon_145764.png' alt='volkswagen' className='brand-logo'/>
            </div>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/nissan_logo_icon_145792.png' alt='nissan' className='brand-logo'/>
            </div>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/renault_logo_icon_145780.png' alt='renault' className='brand-logo'/>
            </div>
            <div className='col'>
                <img src='https://cdn.icon-icons.com/icons2/2402/PNG/512/toyota_logo_icon_145765.png' alt='toyota' className='brand-logo'/>
            </div>
        </div>
    </div>
  )
}

export default Brands;