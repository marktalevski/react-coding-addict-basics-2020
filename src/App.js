import React from 'react'
import CharacterCounter from './components/CharacterCounter'

const App = () => {
    return (
        <div>
            <h1>Mood Tracker</h1>
            <CharacterCounter 
                text={"How was your day?"}
            />
        </div>
    )
}

export default App
