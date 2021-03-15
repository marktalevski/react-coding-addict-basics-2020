import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react'

const ButtonToggle = ({ children, toggleRef, toggleForm }) => {
   return(
      <button 
         onClick={() => {
         // Hmm, things should happen here
         }}
      >
         {children}
      </button>
   )
 }

 export default ButtonToggle