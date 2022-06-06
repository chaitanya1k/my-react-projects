import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <section className='errorPage section'>
      <div className='errorContanier'>
         <h2>Oops! It's A Dead End</h2>
        <Link to = '/' className='btn btn-primary'>Back to home</Link>
      </div>
     
    

    </section>
  )
}

export default Error
