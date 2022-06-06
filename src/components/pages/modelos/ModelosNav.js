import { NavLink } from "react-router-dom";
import './Modelos.css'

const ModelosNav = () => {
  return (
    <nav class="navbar-fixed-top" style={{backgroundColor: '#445c9c'}} role="navigation">
        <div className="container-fluid" style={{paddingTop: '100px'}}>
            <ul class="nav navbar-nav d-flex flex-row justify-content-around">
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/fiat'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">Fiat</li></NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/volkswagen'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">VW</li></NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/renault'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">Renault</li></NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/jeep'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">Jeep</li></NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/citroen'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">Citroen</li></NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/peugeot'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">Peugeot</li></NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/ford'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">Ford</li></NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/toyota'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}><li className="p-3 display-6 nav-marca">Toyota</li></NavLink>
            </ul>
        </div>
    </nav>
    )
}

export default ModelosNav