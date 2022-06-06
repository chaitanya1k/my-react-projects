import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { GlobalContext } from './context'


const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = GlobalContext();

  return <div className={`${isSideBarOpen ? 'sideBar showSideBar' : 'sideBar'}`}>
    <div className='sidebar-header'>

      <img src={logo} alt='logo' className='logoImage' />
      <button className='close-btn' onClick={closeSideBar}><FaTimes /></button>
    </div>

    <ul className='links-list'>
      {links.map((item) => {
        const { id, url, icon, text } = item;
        return <li key={id}><a href={url}>
          {icon} {text}
        </a></li>
      })}
    </ul>

    <ul className='social-list'>
      {social.map((item) => {
        const { id, url, icon } = item;
        return <li key={id}><a href={url}>{icon}</a></li>
      })}
    </ul>


  </div>




}

export default Sidebar;
