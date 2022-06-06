import React from 'react';

const List = ({peoples}) => {
  return (
    <div className='main-div'>
      {peoples.map((person) => {
        const{id,name,age, image} = person;
        return (
          <article key={id} className = 'person'>
            <img src = {image} alt = {name} />
            <div className='botttom-div' >
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })

      }
    </div>
  );
};

export default List;
