import React from "react";
import CartItems from "./CartItems";
import { useGlobalContext } from "./context";


const CartContanier = () => {
    const{ cart } = useGlobalContext();
    return (
        <div className="cart-contanier-section">
            <div className="section-header">
                <h2>Your bags</h2>
            </div>
            <div className="cart-items">
                {cart.map((item) => {

                    return <CartItems key={item.id} {...item} />
                })}
            </div>
            <div className="section-footer">
                <div className="hrLine"></div>
                <div className="totalDiv">
                    <p>Totals</p>
                    <p>$2123</p>
                </div>
                <button className="clear-btn">clear cart</button>
            </div>
        </div>
    )
}

export default CartContanier;