import React, { useState, forwardRef, useEffect } from 'react'

const SignupForm = forwardRef((props, ref) => {
   const [email, setEmail] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   useEffect(() => {
      ref.current.focus()
   }, [])
   
   return <>
      <input 
         type="email" 
         ref={ref}
         value={email}
         onChange={(e) => {
            setEmail(e.target.email)
         }} 
         placeholder="Email" 
      />

      <input 
         type="text" 
         value={username}
            onChange={(e) => {
               setUsername(e.target.username)
            }}
         placeholder="Username" 
      />
      
      <input 
         type="password" 
         value={password}
            onChange={(e) => {
               setPassword(e.target.password)
            }}
         placeholder="Password" 
      />

      <button>
        Submit
      </button>
   </>
 }
)

 export default SignupForm