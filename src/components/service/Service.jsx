import React from 'react'
import './Service.css'
import groupone from '../images/Group1.svg'
import grouptwo from '../images/Group2.svg'
import groupthree from '../images/Group3.svg'
import groupfour from '../images/Group9.png'
export default function Service() {
  return (
    <div className='service'>
      <hr className='set' />
        <div className="heading__wrapper">
          
            <h1>Build & manage distributed teams like no one else.</h1>
        </div>

        <div className="network_wrapper" > 

            <div className="user">
              <img className='image one' src={groupone} alt="" />
              <h4>Experienced Individuals</h4> <br />
              <p>Our network is made up of highly experienced professionals <br /> <br />  who are passionate about what they do.</p>
            </div>

            <div className="user">
              <img className='image two' src={grouptwo} alt="" />
              <h4>Experienced Individuals</h4> <br />
              <p>Our processes have been refined over years of implementation <br /> <br /> meaning our teams always deliver.</p>
            </div>

            <div className="user">
              <img className='image three' src={groupthree} alt="" />
              <h4>Experienced Individuals</h4> <br />
              <p>Our customized platform with in-built analytics helps you <br /> <br /> manage your distributed teams.</p>
            </div>

        </div>
        <img className='image4' src={groupfour } alt="" />
    </div>
  )
}
