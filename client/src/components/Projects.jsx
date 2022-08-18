/* eslint-disable */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../componentes/Footer'
import poke from '../images/poke.png'
import code from '../images/code.png'
import { Link } from 'react-router-dom'
import "./Proyectos.css"

export default function Projects() {
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
            <h2>Proyecto Individual Pokemon</h2>
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
              In this project I applied all the technologies learned in the bootcamp. Creating a PostgreSQL database to store and manage new resources and at the same time fetching information from an external API.
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
            <h2>Proyecto Grupal CoDebug</h2>
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
              This is a group project where we learned to work as a team with agile SCRUM methodology and in addition to applying the knowledge acquired during the course, we were able to learn to use new technology and libraries.
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}