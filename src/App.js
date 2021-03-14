import React from "react"
import CharacterCounter from './components/CharacterCounter'

function App() {    
    return (
        <sections>
            <h2>Mood Tracker</h2>
            <CharacterCounter
                text={'How was your day?'}
            />
        </sections>
    )
}

export default App