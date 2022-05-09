import './Home.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brand } from './Brand';

const brandsArray1 = [
    {id: 1, name: 'fiat', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/fiat_logo_icon_145827.png', url2: 'https://i.postimg.cc/Qt0BV6zY/fiat-logo-icon-145827.webp'},
    {id: 2, name: 'peugeot', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/peugeot_logo_icon_145787.png', url2: 'https://i.postimg.cc/6qKXJwcD/peugeot-logo-icon-145787.webp'},
    {id: 3, name: 'jeep', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/jeep_logo_icon_145814.png', url2: 'https://i.postimg.cc/s2ZdM10k/jeep-logo-icon-145814-1.webp'},
    {id: 4, name: 'citroen', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/citroen_logo_icon_145834.png', url2: 'https://i.postimg.cc/63NSTcZZ/citroen-logo-icon-145834.webp'},
    {id: 5, name: 'ford', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/ford_logo_icon_145825.png', url2: 'https://i.postimg.cc/wv6VSGJw/ford-logo-icon-145825.webp'}
]

const brandsArray2 = [
    {id: 6, name: 'volkswagen', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/volkswagen_logo_icon_145764.png', url2: 'https://i.postimg.cc/fL2LMV36/volkswagen-logo-icon-145764.webp'},
    {id: 7, name: 'nissan', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/nissan_logo_icon_145792.png', url2: ''},
    {id: 8, name: 'renault', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/renault_logo_icon_145780.png', url2: ''},
    {id: 9, name: 'toyota', url: 'https://cdn.icon-icons.com/icons2/2402/PNG/512/toyota_logo_icon_145765.png', url2: ''}
]

const Brands = () => {

  return (
    <div className='container'>
        <div className='row row-cols-5'>
            {
                brandsArray1.map(brand => {
                    return(
                        <div className='col' key={brand.id}>
                            <Brand brand={brand}/>
                        </div>
                    )
                })
            }
        </div>

        <div className='row row-cols-5'>
            {
                brandsArray2.map(brand => {
                    return(
                        <div className='col' key={brand.id}>
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