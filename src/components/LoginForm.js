import React, { useState, forwardRef, useEffect } from 'react'

const LoginForm = forwardRef((props, ref) => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   useEffect(() => {
      ref.current.focus()
   }, [])
   
   return(
   <>
     <input 
         type="text"
         ref={ref} 
         value={username}
         onChange={(e) => {
            setUsername(e.target.value)
         }} 
         placeholder="Username" 
      />
     
     <input 
         type="password" 
         value={password} 
         onChange={(e) => {
            setPassword(e.target.value)
         }}
         placeholder="Password" 
      />
     
     <button>
         Submit
      </button>
   </>
   )
 }
)

 export default LoginForm