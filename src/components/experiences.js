import React, { Component } from 'react'
import '../styles/experiences.css'

import AnimationJobs from '../images/Experiences/AnimationJobs.png'
import Bootcamp from '../images/Experiences/Bootcamp.png'
import FrontEndDevInternship from '../images/Experiences/FrontEndDevInternship.png'
import Graduation from '../images/Experiences/Graduation.png'
import Internship from '../images/Experiences/Internship.png'
import NextExperiences from '../images/Experiences/NextExperiences.png'
import StudentJob from '../images/Experiences/StudentJob.png'
import EVS from '../images/Experiences/EVS.png'


export default class Experiences extends Component {
    render() {
        return (
            <div className='experiencesContainer'>
                <section className='experiencesDirections'>
                    <img src={EVS} />
                    <img src={AnimationJobs} />
                    <img src={Bootcamp} />
                    <img src={FrontEndDevInternship} />
                    <img src={Graduation} />
                    <img src={Internship} />
                    <img src={StudentJob} />
                    <img src={NextExperiences} />
                </section>
                <section className='experiencesText'>
                    <h1>My professional experiences</h1>
                    <div className='experiencesSections'>
                        <div className='date'>2022</div>
                        <p></p>
                    </div>
                    <div className='experiencesSections'>
                        <div className='date'>2021</div>
                        <p>INTERNSHIP (FrontEnd dev) - Pootsy
                            Improvement of the UX
                            Overhaul of the error display system
                            Bugs fixing and features adding
                            Bootcamp becode
                            Last year I decided to make a turn around in my career. And the Tech choose me !
                        </p>
                    </div>
                    <div className='experiencesSections'>
                        <div className='date'>2020</div>
                        <p>ANIMATOR - Maison de quartier Saint Antoine
                            Organization and lead of activities with teens
                            Participation in different projects with other partners
                            Project monitoring (professional and personal axes) with teens</p>
                    </div>
                    <div className='experiencesSections'>
                        <div className='date'>2019</div>
                        <p>ANIMATOR - Agence Bruxelles Propreté</p>
                    </div>
                    <div className='experiencesSections'>
                        <div className='date'>2018-2019</div>
                        <p>EUROPEAN VOLUNTEER SERVICE in Czech Republic
                            I love to travel and experience new things so after my bachelor I did a European Volunteer Service (EVS) in Czech Republic
                            During my SVE in worked with young kids and when I came back in Belgium I worked with teenager, I can say that I'm a friendly person !
                        </p>
                    </div>
                    <div className='experiencesSections'>
                        <div className='date'>
                            2018 (4 months - end of studies)
                        </div>
                        <p>INTERNSHIP - Coren asbl (Coordination environnement)
                            I'm graduated as a sustainable development advisor
                        </p>
                    </div>
                    <div className='experiencesSections'>
                        <div className='date'>2016 - 2018</div>
                        <p>STUDENT JOB (animator) - Ferme Nos Pilifs</p>
                    </div>
                </section>
            </div>
        )
    }
}
