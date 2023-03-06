import './App.css'

// Disable a button
// Write a component called App which returns two JSX elements. The first one is an input of type text and the second one is a button. Your task is to disable the button when the input string has less than 3 characters.

// Directions
// Do not edit the data-testid attributes
// Disable the button if the current value of the input is less than 3 characters long

function App() {
  return (
    <div className='App'>
      <input data-testid='input-id' />
      <button data-testid='button-id'>Click</button>
    </div>
  )
}

export default App
