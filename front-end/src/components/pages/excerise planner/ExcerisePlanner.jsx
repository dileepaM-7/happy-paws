import React, { useEffect } from 'react';
import './ExcerisePlanner.css'
import { Navbar } from '../../NavigationBar/Navbar'
import Footer from "../../Footer/Footer";
import { Link } from 'react-router-dom';
import ExerciseDogImage from '../../../assets/exerciseDog1 .jpg'
import ExerciseDogImage2 from '../../../assets/exerciseDogForm1.jpg'
import exerciseDogImage3 from '../../../assets/exerciseDogForm2.jpg'
import exerciseCardImage1 from '../../../assets/ExerciseCardImage1.jpg'
import WeightSymbolGreen from '../../../assets/WeightSymbol.png'
import WeightSymbolRed from '../../../assets/WeightOver.png'
import WeightSymbolOrange from '../../../assets/WeightLower.png'
import WoofImage from '../../../assets/Woof.png'
import InputData from './inputData/inputData';


const ExcerisePlanner = () => {
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(20, 20);
    }, 20);
  }, []);
  
    const scrollToInput = () => {
      window.scrollTo({
        top: 870,
        behavior: 'smooth'
      });

      
    };
  return (
    <div className='excersie-section'>
      <div>
      <Navbar/>
      <div className='Exercise-allPage'>
        <span className='Exercise-text1'>Get Your Exercise Planner</span> 
        <span className='Exercise-text2'>Let's Make Your Furry Friends</span><br/>
        <span className='Exercise-text3'>Healthy</span><br/>
        <span className='Exercise-text4'>and</span><br/>
        <span className='Exercise-text5'>Happy</span> <br/><br/>
        <span className='Exercise-para1'>We understand how important it is to keep our pets happy and healthy.
          Here, you'll find skillfully <br/> designed workout schedules adapted to your pet's requirements.
          Our programs, which include <br/> enjoyable games and engaging exercises, are intended to enhance your pet's physical condition, 
          provide and deepen your relationship with your pet. Let us go on  a path towards a better, happier <br />life together!</span>
          <img src={ExerciseDogImage}alt="" className='ExerciseDogImage1'/>
          <button className='ExerciseButton1' onClick={scrollToInput}>Get Started</button>
      </div>
        
      </div>
      <div className='ExercisePart2'>
    <InputData/>
    </div>
    <div className='Input-Footer'>
      <Footer/>
      </div> 
    </div>
    
  )
}
export default ExcerisePlanner 
