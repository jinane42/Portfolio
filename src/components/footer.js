import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />


export default class Footer extends Component {
  render() {
    return (
      <div>
        <h2> Let's get in Touch </h2>
        <section className='socials'>
          <a href=''>{github}</a>
          <a href=''>{envelope}</a>
          <a href=''>{linkedin}</a>
        </section>
      </div>
    )
  }
}
