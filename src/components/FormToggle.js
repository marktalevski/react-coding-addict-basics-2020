import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react'

const FormToggle = ({ children, currentIndex }) => {
   if (Array.isArray(children)) {
     return( 
      <div>
         {children}
      </div>
       // Remember, `children` is an array when there's multiple!
       // So, if you want to show all the forms, you just put
       // `children`.
       // What would you do if you just wanted to show one?
      )
   }

   return null
   
 }

 export default FormToggle