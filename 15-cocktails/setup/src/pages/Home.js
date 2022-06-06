import React from 'react'
import CocktailList from '../components/cocktail/CocktailList'
import SearchForm from '../components/searchForm/SearchForm'

export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}
