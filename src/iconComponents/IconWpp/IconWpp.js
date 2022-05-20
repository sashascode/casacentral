import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import './IconWpp.css'

const IconWpp = () => {
  return (
    <a href='https://api.whatsapp.com/send?phone=543425400184&text=Me%20interesa%20saber%20mas%20sobre%20Casa%20Central' className='btn-wsp' target={'_blank'}>
      <i className='icon-whatsapp'><ImWhatsapp/></i>
    </a>
  )
}

export default IconWpp