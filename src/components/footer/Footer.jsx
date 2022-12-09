import React from 'react'
import './Footer.css'
import group3 from '../images/Group17.svg'
export default function Footer() {
  return (
    <>
        <div className="first_wrapper">
            <img className='group' src={group3} alt="" />
            <div className="button__wrapper">
            <h1>Ready to get started?</h1>
            <button>contact us</button>
            </div>
        </div>
        <div className='second__wrapper'>
            <h1> myteam </h1>
            <h3>home </h3>
            <h4>about </h4>
            
            <div className="call">
              <p>987  Hillcrest Lane</p>
              <p>Irvine, CA</p>
              <p>California 92714</p>
              <p>Call Us 949-453-5543</p>
            </div>
              <span>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              </span>
              
        </div>
    </>
  )
}
