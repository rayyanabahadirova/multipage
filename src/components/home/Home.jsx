import React from 'react'
import './Home.css'
import combined from '../images/Group8.png'
import group from '../images/Group7.png'
export default function Home() {
  return (
    <>
    <div className='wrapper'>
        <nav className='navbar'>
            <ul className="nav_wrapper">
                <li className='first'>myteam</li>
                <li className='second '>home</li>
                <li className='third'>about</li>
                <li className='fourth'><button className='one_btn'>contact us </button></li>
            </ul>

        </nav>
        <div className="img_wrapper">
            <img className='img_1' src={combined} alt="" />
            <div className="heading">
                <h1>Find the best <span className='purple'> talent </span> </h1>
            </div>
            <div className="text_wrapper">
                  <hr className='little' />
                <p>Finding the right people and building high <br /> performing teams can be hard. Most companies <br /> aren’t tapping into the abundance of global of talent. We’re about to change that.</p>
                <img className='group_img' src={group} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
