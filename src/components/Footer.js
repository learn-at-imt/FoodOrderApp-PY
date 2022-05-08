import React from 'react'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
       <FontAwesomeIcon icon={faCopyright}/>
 </div>
         <div><p>copyright</p></div> 
       
    </div>
  )
}

export default Footer