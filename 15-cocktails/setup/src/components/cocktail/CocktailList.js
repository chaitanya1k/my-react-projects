import React from 'react'
import Cocktail from './Cocktail'
import Loading from '../Loading'
import { useGlobalContext } from '../../context'
import './Cocktail.css'

function CocktailList() {
  const{cocktails,loading} = useGlobalContext();
  if(loading){
    return (
      <Loading />
    )
  }
  if(cocktails.length < 1){
    return(
      <h1 className='errorDataHeading'>No cocktail match your search criteria</h1>
    )
  }
  return (
    <section className='cocktailsSection'>
      <h1 className='titleHeading'>Cocktails</h1>
      <div className='cocktailsContanier'>
        {cocktails.map((cocktail) => {
          return (
            <Cocktail key={cocktail.id} {...cocktail}  />
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList



