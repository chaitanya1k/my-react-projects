import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour  }) => {
  return (
    <>
      <div className='title'>
        <h2>Our Tours</h2>

        <div className='underline'></div>
      </div>
      <div className='content'>
        {tours.map((tour) => {

          return <Tour key={tour.id} {...tour}  removeTour={removeTour}/>

        })}
      </div>

    
    </>
  )
};

export default Tours;
