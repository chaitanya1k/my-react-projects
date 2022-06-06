import React,{useRef, useEffect, useState} from 'react'
import { useGlobalContext } from '../../context'
import './SearchForm.css'



const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()

  const searchValue = useRef('')
 
 useEffect(() => {
 searchValue.current.focus();
  },[])

  const searchForCocktails = () => {
    setSearchTerm(searchValue.current.value)
    console.log(searchValue.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
   return (
    <section className='formSection'>
     <div className='formContainer'>
       <form className='formControl' onSubmit={handleSubmit}>
         <label className='formLabel'>Search Your Favorite Cocktail</label>
         <input type = 'text' ref={searchValue} name='cocktail' id='cocktai' onChange = {searchForCocktails}></input>
       </form>
     </div>
    </section>
  )
}

export default SearchForm
