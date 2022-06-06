import React from "react";
import {FaShoppingBag} from 'react-icons/fa'

const Nav  = () => {
return (
    <nav>
        <div className="nav-center">
            <h3>UseReducer</h3>
            <div className="nav-conatnier">
            <FaShoppingBag className = 'bag-icon' />
            <div className="amount-contanier">
                <p className="total-amount">2</p>
            </div>
            </div>
           
        </div>
    </nav>
)
}

export default Nav;