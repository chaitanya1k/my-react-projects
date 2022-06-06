import React, { useState } from 'react';

const Tour = ({ image, name, price, info, removeTour,id  }) => {

  const [readMore, setReadMore] = useState(false);

 
  return (
    <>
      <div className='single-tour'>
        <img src={image} className='tour-img' alt={name} />
        <footer>
          <div className='headAndPrice'>
            <h4 className='heading'>{name}</h4>
            <h4 className='price'>${price}</h4>
          </div>
          <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>Not intersted</button>

        </footer>

      </div>



    </>
  )
};

export default Tour;
