/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{
      marginTop: '40px',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: 'white',
      textShadow: 'black 0.1em 0.1em 0.2em'

    }}>
      <Link
        to={'/español'}
        style={{
          textDecoration: 'none',
          color: 'white',
          textShadow: 'black 0.1em 0.1em 0.2em'
        }}>
        <h3 style={{ margin: '10px' }}>Sobre mi</h3>
      </Link>
      <Link 
        to={'/proyectos'}
        style={{
          textDecoration: 'none',
          color: 'white',
          textShadow: 'black 0.1em 0.1em 0.2em'
        }}>
        <h3 style={{ margin: '10px' }}>Proyectos</h3>
      </Link>
    </div>
  )
}