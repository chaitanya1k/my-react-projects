import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  // delete tour
    const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const toursData = async () => {
    setLoading(true)
    try {
      let response = await fetch(url);
      let tours = await response.json()
      setTours(tours);
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
      console.log(error)
    }
}

useEffect(() => {
  toursData();
}, [])


  if (loading) {
    return <Loading />
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => toursData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return(
    <>
  <main>
  <Tours tours = {tours} removeTour={removeTour}/>
 </main>
 </>  
  )
  
 
}

export default App;
