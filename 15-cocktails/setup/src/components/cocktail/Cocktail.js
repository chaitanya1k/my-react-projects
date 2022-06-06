import React from 'react'
import { Link } from 'react-router-dom'
import './Cocktail.css'

function Cocktail( {glass,id,image,info,name} ) {
  
  return (
    <article className='cocktaiList'>
       <div className='imageContanier'>
         <img src= {image} alt = {name} className = 'cocktailaImage' />
       </div>
       <div className='infoContainer'>
         <h3 className='cocktailName'>{name}</h3>
         <h4 className ='glassName'>{glass}</h4>
         <p className='cocktailInfo'>{info}</p>
         <Link to = {`/cocktail/${id}`}><button className='cocktailButton'>DETAILS</button></Link>
       </div>
    </article>
  )
}

export default Cocktail