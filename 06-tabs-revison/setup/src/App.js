import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] = useState(false)
  const [index,setIndex] = useState(0)
  const[jobs,setJobs] = useState([])

  //  useEffect(() => {
  //   setLoading(true)
  //  fetch(url).then(response => response.json())
  //  .then(data => setJobs(data))
  //  .catch(err => console.log(err))
  //  setLoading(false)
  // },[])

  const fetchJobs = async () => {
    setLoading(true)
    const res = await fetch(url)
    const data =  await res.json()
    // setJobs(data)
    console.log(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  },[])

  if(loading){
    return <div>loading....</div>
  }
 
  return(
    <>
    <section className='job-section'>
      <h1>Experinence</h1>
      <div className='displayCompany'>
        <ul>
          {jobs.map((item,index) => {
            const { company} = item
            return <li key={item.id} >{company}</li>
          })}
        </ul>
      </div>
    </section>
    </>
  )
}

export default App
