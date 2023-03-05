import React, { useState } from 'react'

import './App.css'

// Counter
// Write a component called App. Add two buttons, one with the text Increment and the other with the text Decrement. This component should track the difference between how many times the Increment vs Decrement buttons were clicked. Display the current count to the page in an h1 element. The updated value should be displayed to the user immediately.

// Directions
// Return a button with the text Increment
// Return a button with the text Decrement
// Return the current count in h1 JSX element

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
