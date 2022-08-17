/* eslint-disable */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../componentes/Footer'
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
        <p style={{fontSize: '20px', marginLeft: '100px', marginRight: '100px'}}>
          My name is Felipe, I'm a 26 year old full stack developer. This year I finished my studies at Henry where I learned to work with technologies like React and Redux on the Front-end, and NodeJS, Express and Sequelize on the Back-end, and how to work in teams with agile methodologies like SCRUM. Able to work under pressure and always willing to solve problems and look for scalable solutions. I have analytical capacity and interest in constant learning.
        </p>
        <p style={{fontSize: '20px', marginLeft: '100px', marginRight: '100px' }}>
          Since I discovered the world of programming I found a motivation that I haven't felt for a long
          time. I can spend several hours coding and I really enjoy it. I love challenges and I usually
          don't rest until I solve any problem. If you are looking for someone who wants to work hard
          and smart, and constantly learn, don't hesitate to contact me.
        </p>
      </div>
      <Footer/>
    </div>



  )
}

