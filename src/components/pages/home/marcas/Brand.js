import { Link } from "react-router-dom";
import { useState } from "react";

export const Brand = ({brand}) => {
  const [active, setActive] = useState(false);

  return (
    <Link to={`/marcas/${brand.name}`} className={'animated fadeIn'} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <brand.url
          fill={active ? 'red' : 'black'}
          className='brand-logo' 
        /> 
    </Link>
  );
}
