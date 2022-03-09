import React, { Component } from 'react'
import '../styles/home.css'

import profilePic from '../images/profilepic.png'

export default class Home extends Component {
  render() {
    return (
      <div className='homeContainer'>
        <img src={profilePic} alt='profile' className='profilepic'/>
        <div className='text'>
          <h1>Hi! I'm Jinane </h1>
          <h2>Junior Front End developer based in Brussels</h2>
          <h3>And also a lot of other things like plant mama !</h3>
        </div>
          
      </div>
    )
  }
}
