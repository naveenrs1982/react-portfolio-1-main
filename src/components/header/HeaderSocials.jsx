import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/naveenrunnithan/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/naveenrs1982" target="_blank"><FaGithub/></a>
    
    </div>
  )
}

export default HeaderSocials