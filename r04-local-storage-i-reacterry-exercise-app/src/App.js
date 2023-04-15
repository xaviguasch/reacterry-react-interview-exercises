import React, { useState, useEffect } from 'react'

const App = () => {
  // Edit this component
  const [text, setText] = useState(() => localStorage.getItem('inputValue') || '')

  useEffect(() => {
    localStorage.setItem('inputValue', text)
  }, [text])

  return (
    <div>
      <input
        data-testid='input-id'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default App

// Doubt with a small test that doesn't pass
// ✕ Does not update the local storage when the input field is empty(6 ms)
