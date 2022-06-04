import './Brand.css';
import { Brand } from './Brand';
import SvgCitroen from '../../../../iconComponents/SvgCitroen';
import SvgFiat from '../../../../iconComponents/SvgFiat';
import SvgFord from '../../../../iconComponents/SvgFord';
import SvgJeep from '../../../../iconComponents/SvgJeep';
import SvgNissan from '../../../../iconComponents/SvgNissan';
import SvgPeugeot from '../../../../iconComponents/SvgPeugeot';
import SvgRenault from '../../../../iconComponents/SvgRenault';
import SvgToyota from '../../../../iconComponents/SvgToyota';
import SvgVolkswagen from '../../../../iconComponents/SvgVolkswagen';

const brandsArray1 = [
    {id: 1, name: 'fiat', url: SvgFiat},
    {id: 6, name: 'volkswagen', url: SvgVolkswagen},
    {id: 8, name: 'renault', url: SvgRenault},
    {id: 4, name: 'citroen', url: SvgCitroen},
    {id: 2, name: 'peugeot', url: SvgPeugeot},
]

const brandsArray2 = [
    {id: 5, name: 'ford', url: SvgFord},
    {id: 7, name: 'nissan', url: SvgNissan},
    {id: 3, name: 'jeep', url: SvgJeep},
    {id: 9, name: 'toyota', url: SvgToyota}
]

const Brands = () => {

  return (
    <>
        <h2 className='my-title' style={{fontSize: '40px'}}>Nuestras marcas</h2>
        <h4 className="display-4" style={{fontSize: '40px', textAlign: 'center'}}>Selecciona una marca para ver nuestros modelos</h4>
        <div className='container marcas'>
            <div className='d-flex justify-content-center gap-5'>
                {
                    brandsArray1.map(brand => {
                        return(
                            <div className='row ms-1' key={brand.id}>
                                <Brand brand={brand}/>
                            </div>
                        );
                    })
                }
            </div>

            <div className='d-flex justify-content-center gap-5'>    
                {
                    brandsArray2.map(brand => {
                        return(
                            <div className='row ms-1' key={brand.id}>
                                <Brand brand={brand}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>    
    </>
  );
}

export default Brands;