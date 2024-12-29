import { useState } from 'react'
import './App.css'

function App() {
    const [showMessage, setShowMessage] = useState(false)

    const handleClick = () => {
        setShowMessage(true)
    }

    return (
        <>
            <button onClick={handleClick}>Click me!</button>
            {showMessage && <p>🐱 Meow Maylis !!!</p>}
        </>
    )
}

export default App