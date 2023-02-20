import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'; 
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_of4bfuw', 'template_iyw2qqq', form.current, 'XDqfJe3Mak9BeuGiG')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>naveen.rs@gmail.com</h5>
            <a href="mailto:naveen.rs@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxFill  className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Naveen</h5>
            <a href="https://www.linkedin.com/in/naveenrunnithan/" target="_blank">Send a message</a>
          </article>
          
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="email" name='from_email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact