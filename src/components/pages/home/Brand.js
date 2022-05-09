import { Link } from "react-router-dom"
import { useState } from "react";

export const Brand = ({brand}) => {
    const [active, setActive] = useState(false);

  return (
    <Link to={`/marcas/${brand.name}`}>
        <img 
            src={ active ? brand.url2 : brand.url} 
            alt={brand.name} className='brand-logo' 
            onMouseEnter={() => setActive(true)} 
            onMouseLeave={() => setActive(false)}
        />
    </Link>
  )
}
