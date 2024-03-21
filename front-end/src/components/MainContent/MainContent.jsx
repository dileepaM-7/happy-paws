import React from 'react'
import './MainContent.css'
import doggy_Image from '../../assets/doggy.png'
import dog1 from '../../assets/dogImg1.jpg'
import dog2 from '../../assets/dogImg2.jpg'
import dog3 from '../../assets/dogImg3.jpg'

const MainContent = () => {
  return (
    <div className='main_content' id='main-part'>
      <img className='dog_Image1' src={dog1} alt="" /> 
      <img className='dog_Image2' src={dog2} alt="" /> 
      <img className='dog_Image3' src={dog3} alt="" /> 
      <img className='dogImage' id='doggy' src={doggy_Image} alt="" />
    </div>
  )
}

export default MainContent