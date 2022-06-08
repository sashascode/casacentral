import { NavLink } from "react-router-dom";
import './Modelos.css'

const ModelosNav = () => {
  return (
    <nav class="navbar-fixed-top" style={{backgroundColor: '#445c9c'}} role="navigation">
        <div className="container-fluid" style={{paddingTop: '100px'}}>
            <ul class="nav navbar-nav d-flex flex-row justify-content-around">
            <li className='p-3 display-6 nav-marca'>
                <NavLink to={'/marcas/fiat'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>Fiat</NavLink>
            </li>

            <li className='p-3 display-6 nav-marca'>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/volkswagen'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>VW</NavLink>
            </li>

            <li className='p-3 display-6 nav-marca'>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/renault'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>Renault</NavLink>
            </li>

            <li className='p-3 display-6 nav-marca'>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/jeep'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>Jeep</NavLink>
            </li>
            
            <li className='p-3 display-6 nav-marca'>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/citroen'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>Citroen</NavLink>
            </li>

            <li className='p-3 display-6 nav-marca'>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/peugeot'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>Peugeot</NavLink>
            </li>

            <li className='p-3 display-6 nav-marca'>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/ford'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>Ford</NavLink>
            </li>

            <li className='p-3 display-6 nav-marca'>
                <NavLink style={{textDecoration: 'none'}} to={'/marcas/toyota'} className={({isActive}) => isActive ? "nav-marca-active" : "nav-marca"}>Toyota</NavLink>
            </li>

            </ul>
        </div>
    </nav>
    )
}

export default ModelosNav