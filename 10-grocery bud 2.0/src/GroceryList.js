import React from 'react'
import { FaTrash, FaEdit,FaCheck } from 'react-icons/fa';
function GroceryList({list,deleteItem,handleTheEdit,handleTheCheck}) {

  return (
    <section className='items-list-conatanier'>
      {
      list.map((item) => {
          return (
            <div className='list' key={item.id}>
            <p className={item.isComplete?'checkedTheitem' : ''}>{item.title}</p>
            <div className='icons'>
            <FaCheck className=' icon check-icon' onClick={() => handleTheCheck(item.id)}/>
              <FaEdit className='icon trash-icon' onClick={() => handleTheEdit(item.id)}/>
              <FaTrash className='icon edit-icon' onClick={() => deleteItem(item.id)}/>
            </div>
          </div>
          )
        })
      }
      
    </section>
  )
}

export default GroceryList