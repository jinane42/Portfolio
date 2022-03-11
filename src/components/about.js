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
            <div>I have a huge interest for eco-friendly living, not so suprising for a sustainable development advisor I guess !</div>
          </div>
          <div className='imgRight'>
            <div>Traveling is something I'm passionate about, </div>
            <img src={backpack} />
          </div>
          <div className='imgLeft'>
            <img src={lotus} />
            <div>Staying active is important to me, I'm focusing myself in exercicsing, yoga, swimming & walking.</div>
          </div>
          <div className='imgRight'>
            <div>Last year I decided to make a turn around in my career. And the Tech choose me ! </div>
            <img src={tech} />
          </div>
          <div className='imgLeft'>
            <img src={knit} />
            <div>I'm crafty ! I can do a lot of things like painting, embroidering, knitting, drawing, lino cuting & more !</div>
          </div>
          <div className='imgRight'>
            <div>Fun fact about me : </div>
            <img src={moon} />
          </div>
        </div>
      </div>
    )
  }
}
