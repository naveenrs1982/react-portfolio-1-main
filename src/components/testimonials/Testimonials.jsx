import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
   //avatar: AVTR1,
    name: 'Tholka - Director Cognizant',
    review: 'Naveen is an excellent Delivery Leader with a proven track record. I had the pleasure of working with Naveen for several years and have seen him deliver complex multi year programs on time. He is excellent in managing stakeholder expectations and led a global team of engineers through some really demanding schedules. I was lucky to have Naveen in my team and he would be a great asset to any team/organization.'
  },
  {
    //avatar: AVTR2,
    name: 'Sreekanth UST Inc',
    review: 'Naveen managed the UST team working on Medicaid and Medicare claim processing system. He is thoroughly process oriented and ensures the successful delivery of all the projects executed by the team. He is a very good resource manager and his guidance is appreciated by the entire team as well as UST leadership.'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5></h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials