import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import './IconWpp.css'

const IconWpp = () => {
  return (
    <a href='https://api.whatsapp.com/send?phone=5491153887019&text=Hola!%20Quisiera%20%20hacer%20una%20consulta,%20vengo%20de%20la%20página%20de%20Casa%20Central.' className='btn-wsp' target={'_blank'}>
      <i className='icon-whatsapp'><ImWhatsapp/></i>
    </a>
  )
}

export default IconWpp