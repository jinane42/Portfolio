import React, { Component } from 'react'
import '../styles/footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import letsGetInTouch from '../images/letsGetInTouch.png'

const github = <FontAwesomeIcon icon={faGithub} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <img src={letsGetInTouch} className='letsgetintouch'/>
        <section className='socials'>
          <a href='https://github.com/jinane42'>{github}</a>
          <a href='https://www.linkedin.com/in/jinane-ouzina-678ab9170/'>{envelope}</a>
          <a href='https://www.linkedin.com/in/jinane-ouzina-678ab9170/'>{linkedin}</a>
        </section>
        <button>Click here to download my CV</button>
      </div>
    )
  }
}
