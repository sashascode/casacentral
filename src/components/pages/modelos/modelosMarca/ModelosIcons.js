import '../Modelos.css';

const ModelosIcons = ({icons}) => {
  if(icons !== ''){
    return (
      icons.map((modelo, index) => {
        return(
          <div class='grid-item'>
            <img src={modelo} alt={modelo} key={index} className='marca-icon'/>
          </div>  
        )  
      })
    )
  }
}

export default ModelosIcons;