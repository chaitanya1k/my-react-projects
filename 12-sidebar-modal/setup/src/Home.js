import { FaBars } from 'react-icons/fa'
import { GlobalContext, AppContext } from './context'
import React from 'react';

const Home = () => {
  const { openSideBar, openModal } = GlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}><FaBars /></button>
      <button className='btn' onClick={openModal}>Show model</button>
  
      
    </main>
  )
}

export default Home;
