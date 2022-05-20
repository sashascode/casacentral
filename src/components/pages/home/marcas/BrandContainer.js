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
    {id: 2, name: 'peugeot', url: SvgPeugeot},
    {id: 3, name: 'jeep', url: SvgJeep},
    {id: 4, name: 'citroen', url: SvgCitroen},
    {id: 5, name: 'ford', url: SvgFord}
]

const brandsArray2 = [
    {id: 6, name: 'volkswagen', url: SvgVolkswagen},
    {id: 7, name: 'nissan', url: SvgNissan},
    {id: 8, name: 'renault', url: SvgRenault},
    {id: 9, name: 'toyota', url: SvgToyota}
]

const Brands = () => {

  return (
    <section className='my-section'>
            <h1 className='my-title'>Nuestras Marcas</h1>
            <div className='container marcas'>
                <div className='row row-cols-5'>
                    {
                        brandsArray1.map(brand => {
                            return(
                                <div className='col' key={brand.id}>
                                    <Brand brand={brand}/>
                                </div>
                            );
                        })
                    }
                </div>

                <div className='row row-cols-5'>
                    {
                        brandsArray2.map(brand => {
                            return(
                                <div className='col' key={brand.id}>
                                    <Brand brand={brand}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
  );
}

export default Brands;