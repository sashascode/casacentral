import { Link } from 'react-router-dom';
import '../Modelos.css';

const ModelosIcons = ({icons, marca}) => {
  if(icons.icon !== ''){
    return (
      icons.map((modelo, index) => {
        return(
          <div class='grid-item'>
            <Link to={`/modelos/${marca}/${modelo.name}`}> <img loading="lazy" src={modelo.icon} alt={modelo.name} key={index} className='marca-icon'/> </Link>
          </div>  
        )  
      })
    )
  }
}

export default ModelosIcons;