import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react'

const LoginForm = (props) => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   
   return(
   <>
     <input 
         type="text" 
         defaultValue={username} 
         placeholder="Username" 
      />
     
     <input 
         type="password" 
         defaultValue={password} 
         placeholder="Password" 
      />
     
     <button>
         Submit
      </button>
   </>
   )
 }

 export default LoginForm