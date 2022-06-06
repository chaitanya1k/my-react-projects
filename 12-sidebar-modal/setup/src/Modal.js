import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GlobalContext } from './context'


const Modal = () => {
  const{isModalOpen,closeModal} = GlobalContext();
  
  return <div className = {`${isModalOpen?'modal-overlay show-modal':'modal-overlay'}`}>
    <div className='modal-conatainer'>
      <h3>Modal content </h3>
      <button className='close=modal-btn' onClick={closeModal}><FaTimes /></button>
    </div>
  </div>
}

export default Modal;
