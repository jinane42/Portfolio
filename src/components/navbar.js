import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import '../styles/navbar.css'

import About from './about'
import Skills from './skills'
import Home from './home';
import Experiences from './experiences';

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/experiences">Experiences</Link>
            </li>
          </ul>

      </div>
    )
  }
}
