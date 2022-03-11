import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import '../styles/navbar.css'

import Plants from '../images/Plants.jpg'
import home from '../images/home.jpg'
import about from '../images/about.jpg'
import skills from '../images/skills.jpg'
import experiences from '../images/experiences.jpg'


export default class Navbar extends Component {
  render() {
    return (
      <div className='navBar'>
      <img src={Plants} alt='Plants' className='Plants' />
      <ul>
            <li>
              <Link to="/"><img src={home} alt='home' className='navBtn'/></Link>
            </li>
            <li>
              <Link to="/about"><img src={about} alt='about' className='navBtn'></img></Link>
            </li>
            <li>
              <Link to="/skills"><img src={skills} alt='skills' className='navBtn'></img></Link>
            </li>
            <li>
              <Link to="/experiences"><img src={experiences} alt='experiences' className='navBtn'></img></Link>
            </li>
          </ul>

      </div>
    )
  }
}
