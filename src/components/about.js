import React, { Component } from 'react'
import '../styles/about.css'

import backpack from '../images/backpack.png'
import moon from '../images/moon.png'
import knit from '../images/knit.png'
import tech from '../images/tech.png'
import lotus from '../images/lotus.png'
import leaves from '../images/leaves.png'


export default class About extends Component {
  render() {
    return (
      <div className='aboutContainer'>
        <h2>Few things about me .. !</h2>
        <div className='aboutText'>
          <div className='imgLeft'>
            <img src={leaves} />
            <p>I have a huge interest for eco-friendly living, not so suprising for a sustainable development advisor I guess !</p>
          </div>
          <div className='imgRight'>
            <p>Traveling is something I'm passionate about, </p>
            <img src={backpack} />
          </div>
          <div className='imgLeft'>
            <img src={lotus} />
            <p>Staying active is important to me, I'm focusing myself in exercicsing, yoga, swimming & walking.</p>
          </div>
          <div className='imgRight'>
            <p>Last year I decided to make a turn around in my career. And the Tech choose me ! </p>
            <img src={tech} />
          </div>
          <div className='imgLeft'>
            <img src={knit} />
            <p>I'm crafty ! I can do a lot of things like painting, embroidering, knitting, drawing, lino cuting & more !</p>
          </div>
          <div className='imgRight'>
            <p>Fun fact about me : </p>
            <img src={moon} />
          </div>
        </div>
      </div>
    )
  }
}
