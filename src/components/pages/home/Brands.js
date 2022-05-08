import './Home.css'
import { Link } from 'react-router-dom';

const brandsArray1 = [
    {id: 1, name: 'fiat', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/fiat_logo_icon_145827.png'},
    {id: 2, name: 'peugeot', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/peugeot_logo_icon_145787.png'},
    {id: 3, name: 'jeep', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/jeep_logo_icon_145814.png'},
    {id: 4, name: 'citroen', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/citroen_logo_icon_145834.png'},
    {id: 5, name: 'ford', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/ford_logo_icon_145825.png'}
]

const brandsArray2 = [
    {id: 6, name: 'volkswagen', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/volkswagen_logo_icon_145764.png'},
    {id: 7, name: 'nissan', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/nissan_logo_icon_145792.png'},
    {id: 8, name: 'renault', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/renault_logo_icon_145780.png'},
    {id: 9, name: 'toyota', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/toyota_logo_icon_145765.png'}
]

const Brands = () => {
  return (
    <div className='container'>
        <div className='row row-cols-5'>
            {
                brandsArray1.map(brand => {
                    return(
                        <div className='col'>
                            <Link to={`/marcas/${brand.name}`}>
                                <img src={brand.url} alt={brand.name} className='brand-logo'/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>

        <div className='row row-cols-5'>
            {
                brandsArray2.map(brand => {
                    return(
                        <div className='col'>
                            <Link to={`/marcas/${brand.name}`}>
                                <img src={brand.url} alt={brand.name} className='brand-logo'/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Brands;