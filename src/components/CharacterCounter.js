import React, { useState } from 'react'

const CharacterCounter = ({ text }) => {
   const [message, setMessage] = useState('')

   let defaultMoods = ['Good', 'bad', 'ugly']
   const maxLength = 20

   return (
      <div   
         className={`counterInput ${message.length > maxLength ? 'tooLong' : ''}`}
      >
         <div>
            {defaultMoods.map((data) => {
               return (
                  <button
                     key={data}
                     onClick={() => {
                        setMessage(data)
                     }}
                  >
                     {data}
                  </button>
               )
            })}
         </div>

         <textarea
            placeholder={text}
            value={message}
            onChange={(e) => {
               setMessage(e.target.value)
            }}
         />

         <div>
            {message.length}/{maxLength}
         </div>
      </div>
   )
}

export default CharacterCounter