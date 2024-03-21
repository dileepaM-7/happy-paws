import React from "react";
import "./About.css";
import Ishini from '../../../assets/Ishini.jpg';
import Imasha from '../../../assets/Imasha.jpg';
import Dileepa from '../../../assets/Dileepa.jpg';
import Shashini from '../../../assets/Shashini.jpg';
import Sasindu from '../../../assets/Sasindu.jpg';
import { FaLinkedin } from "react-icons/fa6";

export const About = () => {
  return (
    <div id="about" className="aboutus-container-all">
      <h1>ABOUT US</h1>
      <h2>From pet lovers,To pet lovers</h2>
      
      <p className="para-about">Welcome to our magical haven for pet care, where love for our feathery,
       scaly, and furry companions is unwavering. We are tucked away in the digital world. Being passionate 
       pet enthusiasts ourselves, we have created a safe haven in the virtual world with the goal of offering 
       other pet owners support and a wealth of resources. Our website is a complex web of love and commitment, 
       expertly weaved with convenience, community spirit, and ease of use. Come along with us as we set off on a 
       fantastical voyage through the world of superior pet care, where each click brings you one step closer to a place where 
       hearts sing with happiness and tails wag with ecstasy. Welcome to our virtual paradise, where your fantasies about pet 
       care come true.</p>

    <br></br>
      <div className="container-all-data">
      <div className="Name name1"  style={{'--img': `url(${Ishini})`}}>
        <a href=""><FaLinkedin /></a>
          <img src={Ishini} alt="Ishini Ranasinghe" />
          <div className="info">
          <h4 className="user-name"><a href="https://www.linkedin.com/in/ishini-ranasinghe-76589a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin />&nbsp;Ishini S. Ranasinghe</a> </h4>
            <p className="discription"> Software Engineering  Undergraduate From University of westminster.</p>
          </div> 
        </div>
        <div className="Name name2"  style={{'--img': `url(${Dileepa})`}}>
          <img src={Dileepa} alt="Dileepa Malshan" />
          <div className="info">
          <h4 className="user-name"><a href="https://www.linkedin.com/in/dileepa-malshan-998908292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin />&nbsp;Dileepa Malshan</a> </h4>
            <p className="discription1"> Software Engineering  Undergraduate From University of westminster.</p>
          </div>
        </div>
        <div className="Name name3" style={{'--img': `url(${Shashini})`}}>
          <img src={Shashini} alt="Shashini Nilukshi" />
          <div className="info">
          <h4 className="user-name"> <a href="https://www.linkedin.com/in/shashini-nilukshi-717750256"><FaLinkedin />&nbsp;Shashini Nilukshi</a> </h4>
            <p className="discription1"> Software Engineering  Undergraduate From University of westminster.</p>
          </div>
        </div>
        <div className="Name name4"  style={{'--img': `url(${Imasha})`}}>
          <img src={Imasha} alt="Imasha Udayangi" />
          <div className="info">
          <h4 className="user-name"> <a href="https://www.linkedin.com/in/imasha-udayangi/"><FaLinkedin />&nbsp;Imashan Udayangi</a> </h4>
            <p className="discription1"> Software Engineering  Undergraduate From University of westminster.</p>  
          </div>
        </div>
        <div className="Name name5"  style={{'--img': `url(${Ishini})`}}>
          <img src={Sasindu} alt="Sasindu Wickramasinghe" />
          <div className="info">
          <h4 className="user-name"> <a href="https://www.linkedin.com/in/imasha-udayangi/"><FaLinkedin />&nbsp;Sasindu Wickramasinghe</a> </h4>
          <p className="discription1"> Software Engineering  Undergraduate From University of westminster.</p>  
          </div>
        </div>
      </div>
    </div>
  );
};
