import React, { useState, useContext } from 'react'


  export const AppContext = React.createContext();

  // custom hook
  export const GlobalContext = () => {
    return useContext(AppContext);
  }
  

export function AppProvider({children}){
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [isSideBarOpen, setIsSideBarOpen] = useState(false);

 const openSideBar = () => {
   setIsSideBarOpen(true)
 }
 const closeSideBar = () => {
  setIsSideBarOpen(false)
}

const openModal = () => {
  setIsModalOpen(true)
}
const closeModal = () => {
 setIsModalOpen(false)
}


    return (
        <AppContext.Provider value = {{
          isModalOpen,
          isSideBarOpen,
          openModal,
          closeModal,
          openSideBar,
          closeSideBar
        }} >
          
            {children}
         
          </AppContext.Provider>
    )
}