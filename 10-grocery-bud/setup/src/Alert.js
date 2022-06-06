import React, { useEffect } from 'react'

const Alert = ({message,type,removeAlert,list}) => {

  //useEffect for alrets
  useEffect(() => {
  const tiemOut =  setTimeout(() => {
   removeAlert()
  },2500)
  return () => clearTimeout(tiemOut)
  },[list])
  return <>
  <p className={`alert alert-${type}`}>{message}</p>
  </>
}

export default Alert
