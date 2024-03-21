import React from 'react'
import './inddorgames.css'
import fetch from '../../../assets/fetch.jpeg'
import tug from '../../../assets/TugandWar.jpeg'
import hide from '../../../assets/Seek.jpeg'
import toys from '../../../assets/Toy.jpeg'
import training from '../../../assets/DogVills.jpeg'
import scent from '../../../assets/scent.jpeg'
import dance from '../../../assets/DanceDog.jpeg'
import bubble from '../../../assets/BubbleDog.jpeg'
import Treat from '../../../assets/DIYTreat.jpeg'
import climb from '../../../assets/ClimbStairs.jpeg'

function Indoorgames() {
  return (
    
    <div className='IndoorGames-All'>
    <div className='head-indoor'>
    <span className='indoor-games-h1'>Indoor Games 🏠🎲🐾</span>
   </div>
   <div className='paragraph-indoorgames'>
    <p>Indoor games for dogs are vital for <span class="highlight">mental stimulation and physical activity</span>, especially during inclement weather. <span className='underline1'>From classic fetch 🎾 to interactive puzzles 🧩 and hide-and-seek 🐾</span>, these activities strengthen the bond between pet and owner while providing fun and exercise. With supervision, indoor play ensures safety 🛡️, making it an enjoyable experience for both furry friend and human companion. Rain or shine, indoor games keep tails wagging and minds engaged! 🌧️🐶</p>
   </div>
   <div class="indoor-activities">
   <div className='activity1'>
  
    <h3>Fetch-o-Fun</h3>
    <img src={fetch} alt='fetch'/>
<p>🎾 Embrace the excitement of a living room fetch game with your pup! Soft toys or balls make for safe indoor play, ensuring a paw-some time without damaging household items. Just keep an eye out for lamps and fragile décor! 🐾 Remember, safety first for endless tail-wagging joy! 🐶✨</p>
   </div>
  
   <div className='activity1'>
  
    <h3>Tug-of-War Tussle</h3>
    <img src={tug} alt='TUg and War'/>
<p>🐶 Get ready for some bonding fun! Grab a sturdy rope toy and engage in a friendly tug-of-war session with your furry friend. Let your pup feel strong as they test their strength and enjoy some quality playtime with their favorite human companion. It's a win-win for both of you! 🎉💪</p>
   </div>
   <div className='activity1'>
  
    <h3>Hide-and-Seek </h3>
    <img src={hide} alt='TUg and War'/>
<p>🍖 Transform your home into a treasure trove! Hide delicious treats around the house and let your furry detective sniff them out. It's a thrilling game of hide-and-seek that taps into your dog's natural instincts while rewarding their keen sense of smell. Watch as they embark on a delicious adventure! 🐾🕵️‍♂️</p>
   </div>
   <div className='activity1'>
  
    <h3>Interactive Toys </h3>
    <img src={toys} alt='TUg and War'/>
<p>🧩 Invest in brain-boosting fun for your furry friend! Puzzle feeders and treat dispensers engage your dog's mind while satisfying their hunger. These clever toys require problem-solving skills, keeping your pup entertained for hours and promoting mental stimulation. It's a win-win for both playtime and mealtime! 🐾🌟</p>
   </div>
   <div className='activity1'>
  
  <h3>Training Sessions </h3>
  <img src={training} alt='TUg and War'/>
<p>🎓 Turn indoor playtime into a learning adventure! Teach your dog new tricks or reinforce obedience commands like sit, stay, or down using positive reinforcement techniques. With patience and rewards, you'll witness your furry companion's progress and strengthen your bond while having fun together indoors. It's education and entertainment rolled into one delightful experience! 🐾💡</p>
 </div>
 <div className='activity1'>
  
  <h3>Scent Games </h3>
  <img src={scent} alt='TUg and War'/>
<p>🌿 Stimulate your pup's senses with an exciting scavenger hunt indoors! Hide treats or toys in various rooms and let your dog unleash their natural hunting instincts. This engaging game not only provides mental stimulation but also strengthens the bond between you and your furry friend. Watch as they sniff out treasures and revel in their canine joy! 🐾🔍</p>
 </div>
 <div className='activity1'>
  
  <h3>Dance Party Delight </h3>
  <img src={dance} alt='TUg and War'/>
<p>💃 Get ready to boogie with your four-legged friend! Crank up the tunes and hit the dance floor together. Let loose and groove to the beat, making memories that'll have tails wagging for days. It's a paw-some way to bond and spread joy through music and movement. Let's dance our hearts out! 🎶🐾</p>
 </div>
 <div className='activity1'>
  
  <h3>
Bubble Chase</h3>
  <img src={bubble} alt='TUg and War'/>
<p>🎈✨ Blow pet-safe bubbles around the room and watch as your dog's eyes light up with excitement! With each pop, your furry friend engages in a delightful game of chase, providing both mental stimulation and physical exercise. It's a simple yet enchanting activity that fills your home with joy and laughter! 🐾🌟</p>
 </div>
 <div className='activity1'>
  
  <h3>
  DIY Treat Puzzle</h3>
  <img src={Treat} alt='TUg and War'/>
<p>🎁🐾 Transform a simple cardboard box into an engaging treat puzzle for your pup! Cut out holes and place treats inside, challenging your dog's problem-solving skills. Watch as they eagerly nudge, paw, and flip the box to uncover the hidden treasures. It's a rewarding and mentally stimulating game that keeps tails wagging with excitement! 🐶✨</p>
 </div>
 <div className='activity1'>
  
  <h3>
  Stair Climbing</h3>
  <img src={climb} alt='TUg and War'/>
<p>🏃‍♂️💨 Turn your staircase into a fun exercise zone for your pup! Toss a toy or treat up the stairs, motivating your dog to scamper up and retrieve it. Supervise closely to ensure safety, preventing accidents while your furry friend enjoys a stimulating workout. It's a simple yet effective way to keep them active indoors! 🐾🌟</p>
 </div>
 </div>



 </div>
   
  )
}

export default Indoorgames