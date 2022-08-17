/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/in.png'
import image2 from '../images/wpp.png'
import image3 from '../images/gm.png'

export default function Footer() {
  return (
    <div style={{
      alingText: 'center',
      justifyText: 'center',
      bottom: '0',
    }}>
      <div className='proyectos'>
        <a href="https://www.linkedin.com/in/felipe-guitelman/" className='proyectos'>
          <img style={{ maxWith: '30px', maxHeight: '30px', margin: '20px' }} src={image1} alt="" />
        </a>
        <a href="https://wa.me/qr/ZPZSULQLZPHGP1" className='proyectos'>
          <img style={{ maxWith: '30px', maxHeight: '30px', margin: '20px' }} src={image2} alt="" />
        </a>
        <a href="mailto:felipe.guitelman@gmail.com" className='proyectos'>
          <img style={{ maxWith: '25px', maxHeight: '25px', margin: '20px' }} src={image3} alt="" />
        </a>
      </div>
    </div>
  )
}

