import Encabezado from "../../../shared/encabezado/Encabezado"
import { HiArrowLeft, HiDownload } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";


const Modelo = ({modelo}) => {
    let navigate = useNavigate(); 

    const renderSwitch = (param) => {
        switch(param) {
          case 'argo':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/B17EvtdQM5M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>;
            break;
          case 'cronos':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/8r4G2WfuWrE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>;
            break;
          case 'mobi':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/hd7XJ3wD5gI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            break;
          case 'sandero':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/81sqVS7N1B8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            break;
          case 'strada':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/42MKKgx8uW4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            break;
          case 'taos':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/XNNPLzYSpDk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            break;
          case 'toro':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/OruQWQnEk_M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            break;
          case 'uno':
            return <iframe width="560" height="600" src="https://www.youtube.com/embed/GKSA_84rb8w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            break;
            default:
            return ' ';
        }
    }

  return (
      <>
        <Encabezado title={modelo.title} fondo={modelo.header}/>
        <HiArrowLeft onClick={() => navigate(-1)} style={{fontSize: '70px', margin: '70px', cursor: 'pointer'}}/>

        <div className="container">

            <div className="row">
                <div className="col">
                    <div className="card">
                        <img  loading="lazy" src={modelo.thumbnail[0].img} className="card-img-top" alt="..."/>
                    </div>
                </div>

                <div className="col-6">
                    <div className="container">
                        <h1 className="my-title">{modelo.title2}</h1>
                        <h3 className="display-6">{modelo.description}</h3>
                        <a
                            className="btn btn-primary btn-lg" 
                            style={{marginTop: '40px'}} 
                            type="submit"
                            href={modelo.ficha[0]}
                            download={modelo.ficha[1]}
                        > 
                            <HiDownload/> FICHA TECNICA
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-6 col-md-2">
                    <div className="card">
                        <img loading="lazy" className="card-img-top"  src={modelo.thumbnail[1].img} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text" style={{fontWeight: 'bold'}}>{modelo.thumbnail[1].desc}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-2">
                    <div className="card">
                        <img loading="lazy" className="card-img-top"  src={modelo.thumbnail[2].img}  alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text" style={{fontWeight: 'bold'}}>{modelo.thumbnail[2].desc}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-2">
                    <div className="card">
                        <img loading="lazy" className="card-img-top"  src={modelo.thumbnail[3].img} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text" style={{fontWeight: 'bold'}}>{modelo.thumbnail[3].desc}</h5>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="row">
                {
                    renderSwitch(modelo.id)
                }
            </div>

        </div>
      </>
  )
}

export default Modelo;