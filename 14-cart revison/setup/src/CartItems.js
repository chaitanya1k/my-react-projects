import React from "react";
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'
import { useGlobalContext } from "./context";

const CartItems = ({ img, title, price,amount }) => {
  return (
    <article className="cartItems">
      <img src={img} className='cart-photo' alt={title} />
      <div className="infoDiv">
        <p className="name">{title}</p>
        <p className="price">{price}</p>
        <button>Remove</button>
      </div>
      <div className="cartQtyBtn">
          {/* increase amount */}
        <button className='amount-btn'>
          <FaCaretUp className="cartQtyIcon" />
        </button>
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn'>
          <FaCaretDown className="cartQtyIcon" />
        </button>
      </div>


    </article>
  )
}

export default CartItems;