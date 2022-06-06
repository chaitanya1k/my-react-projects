import React, { useState } from 'react'
import { FaEdit, FaTrash,FaCheck } from 'react-icons/fa'


const List = ({ items, deleteItem, editItem, markTheItem}) => {


  
  return ( <div className='groceryList'>
        {items.map((item) => {
          const{id,title,isComplete} = item
       return  <div className='groceryItems' key={id}>
            <p className={isComplete?'grocerName':''}>{title}</p>
            <div className='groceryBtn'>
             <button> <FaCheck className='checked-btn' onClick={() => markTheItem(id)}/></button>
              <button> <FaEdit className='edit-btn' onClick={() => editItem(id)} /></button>
              <button> <FaTrash className='delete-btn' onClick={() => deleteItem(id)}/></button>
            </div>
          </div>
        })}

      </div>

    
  )
}

export default List

