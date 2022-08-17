import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/argentina.png'
import image2 from '../images/usa.png'

export default function LandingPage() {
  return (
    <div style={{ marginTop: '100px', alingText: 'center', justifyText: 'center' }}>
      <h1 style={{ color: 'white', textShadow: 'black 0.1em 0.1em 0.2em' }} >Seleccione un idioma / Select laguage</h1>
      <div>
        <Link to='/español'>
          <img style={{maxWith: '100px', maxHeight: '100px', margin: '20px'}} src={image1} alt="" />
        </Link>
        <Link to='/english'>
          <img style={{maxWith: '100px', maxHeight: '100px', margin: '20px'}} src={image2} alt="" />
        </Link>
      </div>
    </div>
  )
}