/* eslint-disable */
import React from 'react'
import Navbar from '../componentes/Navbar'
import Footer from './Footer'
import image3 from '../images/me.jpg'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div>
      <Navbar />
      <div style={{
        marginTop: '40px',
        // display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',
        textShadow: 'black 0.1em 0.1em 0.2em'

      }}>
        <img
          src={image3}
          alt=""
          style={{
            marginTop: '10px',
            maxWith: '200px',
            maxHeight: '200px',
            borderRadius: '50%'
          }} />
        <p style={{ fontSize: '20px', marginLeft: '100px', marginRight: '100px' }}>
          Mi nombre es Felipe, soy un desarrollador full stack de 26 años. Estudié en Henry donde aprendí a trabajar con tecnologías como REACT y REDUX en el Front-end, y NODEJS, EXPRESS y SEQUELIZE en el Back-end, y a trabajar en equipo con metodologías ágiles como SCRUM. Soy capaz de trabajar bajo presión y siempre dispuesto a resolver problemas y buscar soluciones escalables. Tengo capacidad analítica e interés por el aprendizaje constante.
        </p>
        <p style={{ fontSize: '20px', marginLeft: '100px', marginRight: '100px' }}>
          Desde que descubrí el mundo de la programación encontré una motivación que hace tiempo no sentía. Puedo pasar varias horas codeando y realmente lo disfruto. Me encantan los retos y no descanso hasta que resuelva cualquier problema. Si buscas a alguien que quiera trabajar duro y de manera inteligente, no dudes en contactarme.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

