import { useState,useContext } from 'react';
import cartItems from './data'

export const AppContext = React.createContext();

export const AppProvider = ({childrens}) => {
  const [cart, setCart] = useState(cartItems)
  return(
    <AppContext.Provider value={{cart}}>
      {childrens}
    </AppContext.Provider>
  )

}

// custom hook 

export const useGlobalContext = () => {
  return(
    useContext(AppContext)
  )
}