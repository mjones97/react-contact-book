import React from 'react'
import Phone from '../assets/phone-icon.png'
import Email from '../assets/email-icon.png'

const Contact = (props) => {
  return (
    <div className='contact-card'>
      <img src={props.img} alt=''/>
      <h3>{props.name}</h3>
      <div className='info-group'>
          <img src={Phone} alt='' />
        <p>{props.phone}</p>
      </div>
      <div className='info-group'>
          <img src={Email} alt='' />
            <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Contact