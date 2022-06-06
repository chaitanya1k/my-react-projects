import React, {useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()



const AppProvider = ({ children }) => {
  
  const intialState = {
    isLoading: false,
    cart: [],
    total: 0,
    amount: 0
  }
  const [state, dispatch] = useReducer(reducer, intialState)

  const fetchCartItems = async () => {
    dispatch({type:'LOADING'})
    const response = await fetch(url)
    const items = await response.json()
    try {
      dispatch({type:'DISPLAY_ITEMS', payload:items})
    } catch (error) {
      console.log(error)
    }
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  // const increase = (id) => {
  //   dispatch({ type: 'INCREASE', payload: id })
  // }
  // const decrease = (id) => {
  //   dispatch({ type: 'DECREASE', payload: id })
  // }

const toggleFunctions = (id,type) => {
  dispatch({type:'TOGGLE_FUNCTIONS', payload : {id,type}})
}
  
// fetch cartItems
  useEffect(() => {
   fetchCartItems()
  },[])

  // total and amount setup 
  useEffect(() => {
    dispatch({ type: 'TOTALS' })
  }, [state.cart])

  //



  return (
    <AppContext.Provider

      value={{
        ...state,
        clearCart,
        removeItem,
        toggleFunctions
      }}

    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
