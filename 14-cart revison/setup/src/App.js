import React from 'react'
import CartContanier from './CartContainer'
import './index.css'
import Loading from './Loading'
import Nav from './Nav'


const App = () => {
    // const [isLoading,setIsLoading] = true;

    
    return(
        <main>
            <Nav />
            <CartContanier />
        </main>
    )
}
export default App;