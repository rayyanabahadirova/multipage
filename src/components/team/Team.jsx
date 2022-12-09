import React from 'react'
import './Team.css'
import kub from '../images/Group10.svg'
import group from '../images/Group24.png'
import group2 from '../images/Group16.svg'
export default function Team() {
  return (
    <div className='team__wrapper'>
        <img src={kub} alt="" />
        <h1 className='hi'>Delivering real results for top</h1>
        <h1 className='hi2' >   companies. Some of our <span>success stories.</span></h1>
        <img className='humans' src={group} alt="" />
        <img className='toungle' src={group2} alt="" />
    </div>
  )
}
