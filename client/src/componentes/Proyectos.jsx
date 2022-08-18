/* eslint-disable */
import React from 'react'
import Navbar from '../componentes/Navbar'
import Footer from './Footer'
import poke from '../images/poke.png'
import code from '../images/code.png'
import { Link } from 'react-router-dom'
import "./Proyectos.css"

export default function Proyectos() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div style={{
        display: 'flex',
        marginTop: '40px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',
        textShadow: 'black 0.1em 0.1em 0.2em'

      }}>
        <div className='proyectos'>
          <a
            style={{
              textDecoration: 'none',
              color: 'white',
              textShadow: 'black 0.1em 0.1em 0.2em'
            }}
            href="https://pi-pokemon-main-ten.vercel.app/home">
            <h2>Pokemons Individual Project</h2>
            <img
              src={poke}
              alt=""
              style={{
                marginTop: '10px',
                maxWith: '200px',
                maxHeight: '200px',
                borderRadius: '5%'
              }} />
            <p style={{ fontSize: '20px', marginLeft: '40px', marginRight: '40px' }}>
              En este proyecto apliqué todas las tecnologías aprendidas en el curso. Creando una base de datos en PostgreSQL para almacenar y gestionar nuevos recursos y al mismo tiempo tayendo información desde una API externa.
            </p>
          </a>
        </div>
        <div className='proyectos'>
          <a
            style={{
              textDecoration: 'none',
              color: 'white',
              textShadow: 'black 0.1em 0.1em 0.2em'
            }}
            href="https://codebug-ten.vercel.app/">
            <h2>CoDebug Group Project</h2>
            <img
              src={code}
              alt=""
              style={{
                marginTop: '10px',
                maxWith: '200px',
                maxHeight: '200px',
                borderRadius: '5%',
                transition: 'all 300ms',
              }} />
            <p style={{ fontSize: '20px', marginLeft: '40px', marginRight: '40px' }}>
              Este es un proyecto grupal donde aprendimos a trabajar en equipo con metodologia agile SCRUM y ademas de aplicar los conocimientos adquiridos durante el curso, pudimos aprender a utilizar nuevas tecnologia y librerias.
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}