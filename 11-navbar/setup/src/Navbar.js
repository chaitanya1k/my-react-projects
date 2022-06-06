import React, { useState, useRef, useEffect } from 'react';
import {social,links} from './data'
import { FaBars } from "react-icons/fa";
import logo from './logo.svg';

const Navbar = () => {
  const[displayLinks,setDisplayLinks] = useState(false);
  const linksContanierRef = useRef(null);
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
   if (displayLinks) {
    linksContanierRef.current.style.height = `${linksHeight}px`;
  } else {
    linksContanierRef.current.style.height = '0px';
  }
  },[displayLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
            <img src = {logo} alt = 'logo' />
            <button className="nav-toggle" onClick={() => setDisplayLinks(!displayLinks)}>
             <FaBars />
            </button>
         </div>
        <div className= 'links-container' ref={linksContanierRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const{id,text,url} = link
              return <li key={id}><a href={url}>{text}</a></li>
            })}
          </ul>
        </div>  
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    
     
    </nav>
  )
}

export default Navbar;