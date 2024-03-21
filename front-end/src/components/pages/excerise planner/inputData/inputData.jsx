import React, { useState } from 'react';
import './inputData.css'
import { Navbar } from '../../../NavigationBar/Navbar'
import arrow from '../../../../assets/Arrow.png'
// import ExerciseCardImage1 from '../../../../assets/ExerciseCard1.png'

import ActiveDogBreed1 from '../../../../assets/ActiveDogBreed1.gif'
import backgroundex from '../../../../assets/BackgroundTiny.avif'
import Footer from '../../../Footer/Footer';
import DogTopicBackgroundimage1 from '../../../../assets/DogTopicBackground1.jpeg'
import DogTopicBackgroundimage2 from '../../../../assets/DogTopicBackground2.jpeg'
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
const InputData = () => {
  const [selectedCard, setSelectedCard] = useState(null);



  function showExercise(cardId, exercisePlan) {
    setSelectedCard(cardId);
  
    // Hide all exercise cards
    var exerciseCards = document.getElementsByClassName('exercise-card');
    for (var i = 0; i < exerciseCards.length; i++) {
      exerciseCards[i].classList.remove('active');
    }
  
    // Show only the selected exercise card
    var selectedCardElement = document.getElementById(cardId);
    selectedCardElement.classList.add('active');
  
    // Hide all exercise plans
    var exercisePlans = document.getElementsByClassName('exercise-plan');
    for (var j = 0; j < exercisePlans.length; j++) {
      exercisePlans[j].classList.remove('active');
    }
  
    // Show the corresponding exercise plan
    var exercisePlanElement = document.getElementById(exercisePlan);
    exercisePlanElement.classList.add('active');
  
    // Scroll down 400px
    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });
  }



  return (
    <div className='InputData-Cardall'id='InputData'>

      
        <span className='Input-header'>Choose Your Pet Category</span>

        <img src={DogTopicBackgroundimage1} alt="" className='InputDogImageForTopic'/>
      <div className='breed-card'>
        <div  className="exercise-card" id="card1">
            <div className='breed-card1' onClick={() => showExercise('card1', 'exercisePlan1')}> 
            
              <span className='card-header1'>Tiny Dog Breeds</span>
              <span className='dogsBreedsText'>Chihuahua<br/>
                                              Pomeranian<br/>
                                              Yorkshire Terrier<br/>
                                              Pug<br/>
                                              dachshund<br/>
                                              Beagle<br/>
                                              Corgi<br/>
                                              Shiba In</span>
              <div className='Exe-Join-Now'>
                <div className='ExerciseMoreInfo'>  
                <span className='JoinNowText' onClick={() => showBreedCards()}>Join Now <HiArrowCircleRight className='arrow-icon'/></span>
                </div>
              </div>
              </div>
        </div>

      
        <div  className="exercise-card" id="card2">
        <div className='breed-card2' onClick={() => showExercise('card2', 'exercisePlan2')}> 
          <span className='card-header1'>Active Dog Breeds</span>
          <span className='dogsBreedsText'>Labrador Retriever<br/>
          Dobermann<br/>
          Samoyed<br/>Samoyed<br/>
          Australian Shepherd</span>
          <span></span>
          <div className='Exe-Join-Now2'>
          <div className='ExerciseMoreInfo'>  
          <span className='JoinNowText1' onClick={() => showBreedCards()}>Join Now <HiArrowCircleRight className='arrow-icon'/></span>
                </div>
          </div>
        </div>
        </div>

        <div  className="exercise-card" id="card3">
        <div className='breed-card3' onClick={() => showExercise('card3', 'exercisePlan3')}> 
          <span className='card-header1'>Low-Shedding Dog Breeds</span>
          <span className='dogsBreedsText1'>Shih Tzu<br/>
            Poddle<br/>Samoyed</span>
          <span></span>
          <div className='Exe-Join-Now3'>
          <div className='ExerciseMoreInfo'>  
          <span className='JoinNowText' onClick={() => showBreedCards()}>Join Now <HiArrowCircleRight className='arrow-icon'/></span>
                </div>
          </div>
          </div>
        </div>

        <div  className="exercise-card" id="card4">
        <div className='breed-card4' onClick={() => showExercise('card4', 'exercisePlan14')}> 
          <span className='card-header1'>Large Dog Breeds
          </span>
          <span className='dogsBreedsText1'>Golden Retriever<br/>
          German Shepherd<br/>
          Siberian Husky<br/>
          Boxer<br/>Rottweiler<br/>Bernese Mountain Dog</span>
          <span></span>
          <div className='Exe-Join-Now4'>
          <div className='ExerciseMoreInfo'>  
          <span className='JoinNowText' onClick={() => showBreedCards()}>Join Now <HiArrowCircleRight className='arrow-icon'/></span>
                </div>
          </div>
        </div>
        </div>

        <div  className="exercise-card" id="card5">
        <div className='breed-card5' onClick={() => showExercise('card5', 'exercisePlan5')}> 
          <span className='card-header1'>Apartment-Friendly <br/>Dog Breeds
          </span>
          <span className='dogsBreedsText1'>Pug<br/>cocker spaniel<br/>Bull Dog<br/>Charles spaniel
          <br/>terrier<br/>Shih Tzu <br/>Corgi</span>
          <span></span>
          <div className='Exe-Join-Now5'>
          <div className='ExerciseMoreInfo'>  
          <span className='JoinNowText' onClick={() => showBreedCards()}>Join Now <HiArrowCircleRight className='arrow-icon'/></span>
                </div>
          </div>
        </div>
      </div>
      </div>
      
      <br/> 
      <div className='inputBottom'>
        <div id="exercisePlan1" style={{ display: selectedCard === 'card1' ? 'block' : 'none' }}>
        <div className='CardOfTiny'>
        <div className='TinybreedExercises'>
          <span className='TinybreedExercises-header'>Exercise for Tiny Dog Breeds</span><br/><br/>
          <span className='TinybreedExercises-topic1'>Lower-Weight:</span>
          <p className='ExercisePara'>
          <span className='extopic2'>Up to 1 year: </span> Short walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='extopic2'>1-7 years:</span> Moderate walks (15-20 minutes) 2-3 times a day, interactive <Link to='/indoor' className='indoor-LinktoPage'>indoor games</Link>.<br/>
          <span className='extopic2'> 7+ years:</span> Short walks (10-15 minutes) 1-2 times a day, gentle indoor exercises like stretching and light play.</p><br/>
          <span className='TinybreedExercises-topic1'>Normal-Weight: </span><br/>
          <p className='ExercisePara'><span className='extopic2'>Up to 1 year:</span> Moderate walks (15-20 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='extopic2'>1-7 years:</span> Regular walks (20-30 minutes) 2-3 times a day, interactive <Link to='/indoor' className='indoor-LinktoPage'>indoor games</Link>.<br/>
          <span className='extopic2'>7+ years: </span>Moderate walks (15-20 minutes) 1-2 times a day, light indoor exercises like gentle fetch.</p><br/>
          <span className='TinybreedExercises-topic1'>Over-Weight: </span><br/>
          <p className='ExercisePara'><span className='extopic2'>Up to 1 year:</span> Controlled walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='extopic2'>1-7 years:</span> Gradual increase in walks (15-20 minutes) 2-3 times a day, controlled  <Link to='/indoor' className='indoor-LinktoPage'>indoor activities</Link>.<br/>
          <span className='extopic2'>7+ years:</span> Low-impact walks (10-15 minutes) 1-2 times a day, light indoor exercises focusing on weight management.</p>
          </div>
        </div>
        </div>

        <div id="exercisePlan2" style={{ display: selectedCard === 'card2' ? 'block' : 'none' }}>  
        <div className='CardOfTiny'>
        <div className='ActivebreedExercises'><br/>
          <span className='ActivebreedExercises-header'>Exercise for Active Dog Breeds</span><br/><br/><br/>
          <span className='ActivebreedExercises-topic1'>Lower Weight:</span>
          <p className='ActiveExercisePara'>
          <span className='Activeextopic2'>Up to 1 year: </span> Supervised play in a safe environment, short walks (15-20 minutes) 3-4 times a day.<br/>
          <span className='extopic2'>1-7 years:</span> Regular walks (30-45 minutes) 2-3 times a day, agility training,fun activities.<br/>
          <span className='extopic2'> 7+ years:</span> Moderate walks (20-30 minutes) 1-2 times a day, mentally stimulating activities, low-impact exercises.</p><br/>
          <span className='ActivebreedExercises-topic1'>Normal Weight: </span><br/>
          <p className='ActiveExercisePara'>
          <span className='extopic2'>Up to 1 year:</span> Structured play sessions, longer walks (20-30 minutes) 3-4 times a day.<br/>
          <span className='extopic2'>1-7 years:</span> Brisk walks (45-60 minutes) 2-3 times a day, obedience training, fetch, agility.<br/>
          <span className='extopic2'>7+ years:</span> Longer walks (30-45 minutes) 1-2 times a day, swimming, brain games, moderate agility.</p><br/>
          <span className='ActivebreedExercises-topic1'>Over Weight: </span><br/>
          <p className='ActiveExercisePara'>
          <span className='extopic2'>Up to 1 year:</span> Structured play sessions, controlled walks (15-20 minutes) 3-4 times a day.<br/>
          <span className='extopic2'>1-7 years:</span> Progressive increase in walk time (20-30 minutes) Weight management exercises are performed 2-3 times a day, as is controlled agility.<br/>
          <span className='extopic2'>7+ years:</span> Low-impact walks (20-30 minutes) 1-2 times a day, swimming, joint-friendly exercises, portion-controlled diet.</p>
          </div>
        </div>
        </div>

        <div id="exercisePlan3" style={{ display: selectedCard === 'card3' ? 'block' : 'none' }}>
        <div className='CardOfTiny'>
        <div className='ShadingbreedExercises'>
        <span className='SheddingbreedExercises-header'>Exercise for Low Shedding Dog Breeds</span><br/><br/><br/>
          <span className='SheddingbreedExercises-topic1'>Lower-Weight:</span>
          <p className='SheddingExercisePara'>
          <span className='Sheddingextopic2'>Up to 1 year: </span> Short walks (10-15 minutes) 3-4 times a day,indoor play sessions with toys.<br/>
          <span className='Sheddingextopic2'>1-7 years:</span> Moderate walks (15-20 minutes) 2-3 times a day, interactive<Link to='/indoor' className='indoor-LinktoPage'>indoor games</Link> .<br/>
          <span className='Sheddingextopic2'> 7+ years:</span> Short walks (10-15 minutes) 1-2 times a day, gentle indoor exercises like stretching and light play.</p><br/><br/>
          <span className='SheddingbreedExercises-topic1'>Normal-Weight: </span><br/>
          <p className='SheddingExercisePara'>
          <span className='Sheddingextopic2'>Up to 1 year:</span> Moderate walks (15-20 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='Sheddingextopic2'>1-7 years:</span> Regular walks (20-30 minutes) 2-3 times a day, interactive <Link to='/indoor' className='indoor-LinktoPage'>indoor games</Link>.<br/>
          <span className='Sheddingextopic2'>7+ years: </span>Moderate walks (15-20 minutes) 1-2 times a day, light indoor exercises like gentle fetch.</p><br/><br/>
          <span className='SheddingbreedExercises-topic1'>Over-Weight: </span><br/>
          <p className='SheddingExercisePara'>
          <span className='Sheddingextopic2'>Up to 1 year:</span> Controlled walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='Sheddingextopic2'>1-7 years:</span> Gradual increase in walks (15-20 minutes) 2-3 times a day, controlled indoor activities.<br/>
          <span className='Sheddingextopic2'>7+ years:</span> Low-impact walks (10-15 minutes) 1-2 times a day, light indoor exercises focusing on weight management.</p><br/>
          </div>
          </div>
          </div>
          

        <div id="exercisePlan4" style={{ display: selectedCard === 'card4' ? 'block' : 'none' }}>
        <div className='CardOfTiny'>
          <div className='LargebreedExercises'><br/>
          <span className='ActivebreedExercises-header'>Exercise for large Dog Breeds</span><br/><br/><br/>
            <span className='ActivebreedExercises-topic1'>Lower Weight:</span>
            <p className='ActiveExercisePara'>
            <span className='Activeextopic2'>Up to 1 year: </span> Supervised play in a safe environment, short walks (15-20 minutes) 3-4 times a day.<br/>
            <span className='Activeextopic2'>1-7 years:</span> Regular walks (30-45 minutes) 2-3 times a day, obedience training, fetch, hiking.<br/>
            <span className='Activeextopic2'> 7+ years:</span>  Moderate walks (20-30 minutes) 1-2 times a day, swimming, mentally stimulating games.</p><br/><br/>
            <span className='ActivebreedExercises-topic1'>Normal Weight: </span><br/>
            <p className='ActiveExercisePara'>
            <span className='extopic2'>Up to 1 year:</span> Structured play sessions, longer walks (20-30 minutes) 3-4 times a day.<br/>
            <span className='extopic2'>1-7 years:</span> Brisk walks (45-60 minutes) 2-3 times a day, jogging, agility training, swimming.<br/>
            <span className='extopic2'>7+ years:</span>  Longer walks (30-45 minutes) 1-2 times a day, hiking on easy terrain, brain games, swimming.</p><br/><br/>
            <span className='ActivebreedExercises-topic1'>Over Weight: </span><br/>
            <p className='ActiveExercisePara'>
            <span className='extopic2'>Up to 1 year:</span> Structured play sessions, controlled walks (15-20 minutes) 3-4 times a day.<br/>
            <span className='extopic2'>1-7 years:</span> Gradual increase in walks (20-30 minutes) 2-3 times a day, weight management exercises, controlled agility.<br/>
            <span className='extopic2'>7+ years:</span> Low-impact walks (20-30 minutes) 1-2 times a day, swimming, joint-friendly exercises, portion-controlled diet.</p>
          </div>
        </div>  
        </div>

        <div id="exercisePlan5" style={{ display: selectedCard === 'card5' ? 'block' : 'none' }}>
        <div className='CardOfTiny'>
          <div className='ApartmentbreedExercises'> <br/>
              <span className='TinybreedExercises-header'>Exercise for Apartment-Friendly Dog Breeds</span><br/><br/><br/>
              <span className='TinybreedExercises-topic1'>Lower-Weight:</span>
            <p className='ApartmentExercisePara'>
              <span className='Apartmentextopic2'>Up to 1 year: </span> Short walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
              <span className='Apartmentextopic2'>1-7 years:</span> Moderate walks (15-20 minutes) 2-3 times a day, interactive <Link to='/indoor' className='indoor-LinktoPage'>indoor games</Link>.<br/>
              <span className='Apartmentextopic2'> 7+ years:</span> Short walks (10-15 minutes) 1-2 times a day, gentle indoor exercises like stretching and light play.</p><br/><br/>
              <span className='TinybreedExercises-topic1'>Normal-Weight: </span><br/>
            <p className='ApartmentExercisePara'><span className='extopic2'>Up to 1 year:</span> Moderate walks (15-20 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
              <span className='Apartmentextopic2'>1-7 years:</span> Regular walks (20-30 minutes) 2-3 times a day, interactive <Link to='/indoor' className='indoor-LinktoPage'>indoor games</Link>.<br/>
              <span className='Apartmentextopic2'>7+ years: </span>Moderate walks (15-20 minutes) 1-2 times a day, light indoor exercises like gentle fetch.</p><br/><br/>
              <span className='TinybreedExercises-topic1'>Over-Weight: </span><br/>
            <p className='ApartmentExercisePara'><span className='extopic2'>Up to 1 year:</span> Controlled walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
              <span className='Apartmentextopic2'>1-7 years:</span> Gradual increase in walks (15-20 minutes) 2-3 times a day, controlled <Link to='/indoor' className='indoor-LinktoPage'>indoor activities</Link>.<br/>
              <span className='Apartmentextopic2'>7+ years:</span> Low-impact walks (10-15 minutes) 1-2 times a day, light indoor exercises focusing on weight management.</p>
            </div>
        </div> 
      </div>   
    </div>
  </div>
  )
}
export default InputData;


