import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react'

const SignupForm = (props) => {
   const [email, setEmail] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   
   return <>
      <input 
         type="email" 
         defaultValue={email} 
         placeholder="Email" 
      />

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
 }

 export default SignupForm