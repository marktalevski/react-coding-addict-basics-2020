import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react'

import ButtonToggle from './ButtonToggle'
import FormToggle from './FormToggle'

const ToggleableForm = ({ options }) => {
   const currentForm = 0 // Change this to 1 to get the Signup form to show up
   let focusRef = 0
   
   return(   
    <>
     {options.map((el, index) => {
       return( 
        <ButtonToggle 
          key={`button${index}`}
        >
          {el.name}
        </ButtonToggle>
       )
    })}

     <FormToggle 
        currentIndex={currentForm}
      >
      {options.map((el, index) => {
         return(
          <div 
            key={`form${index}`}
          >
           {createElement(el.component, { /* Hmm, what should go here?*/ })}
         </div>
        )
      })}
     </FormToggle>
   </>
   )
 }

 export default ToggleableForm