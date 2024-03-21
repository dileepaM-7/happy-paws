import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import food from "../../../assets/food.png";
import ex from "../../../assets/ex.png";
import consultant from "../../../assets/consultant.png";
import vaccine from "../../../assets/vaccine.png";
import medical from "../../../assets/medical.png";
import petconsultant from '../../../assets/petconsultant.png';


import './Services.css'
import { HiArrowCircleRight } from "react-icons/hi";

export const Services = () => {
  return (
    <div id="services" className="services">
      <div className="meal-suggestion">
        <img src={food} alt="" className="food-image"/>
        <b>Meal Suggestion</b><p><br/>"Tailored Temptations: Satisfy Your Pet's Palate with 
         Personalized <br></br>Food Suggestions Catered to Their Unique Tastes and Preferences!"</p>
         <Link to="./meals"><button className="food-btn">Get Started <HiArrowCircleRight/></button></Link>
      </div>
      
      <div className="excerise-suggestion">
      <img src={ex} alt="" className="ex-image"/>
      <b>Exercise Plans</b><p><br/>"Keep your pet active and joyful with our Exercise Planner! Personalized <br />workout routines designed 
      for your furry friend's happiness and well-being. <br /> From playful games to easy walks, make every moment 
      together healthy and fun!"</p>
      <Link to="./exceisePlanner"><button className="ex-btn">Get Started <HiArrowCircleRight/></button></Link>
      
      </div>
      <div className="consultant-search">
      <img src={petconsultant} alt="" className="consultant-image"/>
      <b>Search for Consultants</b><p className="find-consultants-para"><br/>"Discover our new "Pet Consultant Search" feature! 
        Easily find and connect <br />with experienced pet consultants who can provide personalized care 
        tips <br />and guidance. Simply search, explore profiles, and book appointments for <br />tailored advice.
        Your pet's well-being is just a click away!"</p>
        <Link to="./consultant"><button className="consultant-btn">Get Started <HiArrowCircleRight/></button></Link>
      
      </div>
      <div className="vaccine-date">
      <img src={vaccine} alt="" className="vaccine-image"/>
      <b>Vaccination reminder</b><p><br/>"Keep your pet's health in check effortlessly! Set personalized vaccination <br />
       reminders, and we'll notify you on the exact date. Stay on top of your <br />furry 
       friend's well-being with automatic alerts and a handy vaccine <br /> history tracker. 
       Easy, convenient, and worry-free pet care at your fingertips!"</p>
       <Link to="./vaccine"><button className="vaccine-btn">Get Started <HiArrowCircleRight/></button></Link>
      
      </div>
      <div className="medical-data">
      <img src={medical} alt="" className="medical-image"/>
      <b>Medical Data Store</b><p><br/>
      "Safeguard your pet's health history with our "Pet Medical Records" feature. <br />
      Easily store and access vaccination details, treatments, and appointments <br />
      in one place. Keep track of your pet's well-being with this simple <br />
      and organized medical record feature!"
      </p>
      <Link to="./medical"><button className="medical-btn">Get Started <HiArrowCircleRight/></button></Link>
      </div>

      <div className="consultant-profile">
      <img src={consultant} alt="" className="consultant-profile-img"/>
      <b>Bussiness Profiles for Consultants</b><p><br/>
      "Pet Consultants can create profile for them by inputing their<br /> Bussiness details,
       Then then the system save them and the Consultant <br />publishes the account then the pet oweners 
       can search for them!"
      </p>
      <h3>To get this feature - Sign in as a Consutant</h3>
      </div>
    </div>
  );
};
