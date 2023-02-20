import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Credentials</h5>
      <h2></h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Certifications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>PMP</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSM</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Scaled Agile - SAFE Practitioner</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>AWS Cloud Practitioner</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bachelor of Technology(Information Technology)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MBA(Graduating in 2023)</p>
            </li>
            
          </ul>
        </article>
        {/* Skills */}
        <article className="service">
          <div className="service__head">
            <h3>Software Development Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Waterfall and Agile methodologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hands-on technical skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Thinking and System Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Innovation Oriented and Customer focused</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Servant Leadership</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fintech and Healthcare</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services