import React, { useEffect } from 'react';
import { generateDate } from './Calender';
import "./Vaccine.css";

const Vaccine = () => {
  const dates = generateDate();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className='vaccinate-container'>
      <div className='custom-grid'>
      <div className='custom-date-grid'>
        {
          days.map((day, index) => {
            return <p key={index} className='date-content-upper'> {day}  </p>
          })
        }
      </div>
      <div className='custom-date-grid'>
        {
          generateDate().map(({ date, currentMonth, today }, index) => {
            return <div className='date-content-upper'>
            <p className={
              (currentMonth ? "" : "gray-text-number") + " " + (today ? "red-color-today" : "")
            }>
              {date.date()}
            </p>
          </div>
          

          })
        }
      </div>
    </div>
    <div>
      <p>Vaccination Details</p>
      <p>No added details for Today.</p>
    </div>
    </div>
  );
}

export default Vaccine;
