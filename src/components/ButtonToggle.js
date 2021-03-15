import React from 'react'

const ButtonToggle = ({ children, toggleRef, toggleForm }) => {
   return(
      <button 
         onClick={() => {
            toggleForm()
         }}
      >
         {children}
      </button>
   )
 }

 export default ButtonToggle