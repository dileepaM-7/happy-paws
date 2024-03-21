import React, { useEffect, useState } from 'react';
import './Meals.css';
import { Navbar } from '../../NavigationBar/Navbar';

function Meals() {
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [data, setData] = useState([{}]);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    
  }, []);

  const handleGenerateClick = async () => {
    // Validate age and weight
    if (isNaN(age) || age <= 0 || isNaN(weight) || weight <= 0) {
        alert('Please enter valid age and weight.');
        return;
    }

    try {
      const response = await fetch('https://happypaws-ml.onrender.com/predict', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ breed, age, weight }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch prediction');
        }

        const result = await response.json();
        console.log('Prediction:', result.prediction);

        // Set the prediction in the state
        setPrediction(result.prediction);

    } catch (error) {
        console.error('Error:', error.message);
    }
};

  return (
    <div className='main'>
      <Navbar />
      <div className='heading'>
        <h2 className='meal-suggestion-head'>Meal Suggestion</h2>
        <div className='container1'>
        </div>
        <div className='meal-description'>
          <h4>Enter Your Pet details to get unique Food recommendations!</h4>
        </div>
      </div>

      <div className='meal-data-input'>
        <input
          type="text"
          className='search-bar'
          placeholder='Breed'
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          type="number"
          className='search-bar'
          placeholder='Age (Y)'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="number"
          className='search-bar'
          placeholder='Weight (KG)'
          step="0.1" // Allows decimal numbers
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button className='meal-genarate-btn' onClick={handleGenerateClick}>
        Generate
      </button>
      {prediction && (
  <div className='mealitems'> 
    <p>Predicted Preferred Foods</p>
    <ul className='predicted-food-list'>
      {prediction.split(', ').map((food, index) => (
        <li key={index}>{food}</li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
}
export default Meals;