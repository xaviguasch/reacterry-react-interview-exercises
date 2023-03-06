// Temperature Converter
// Write a component called App which accepts the temperature input in Celsius and converts it to Kelvin and Fahrenheit. Your application should have one input JSX element of type number that accepts input from the user.

// Your application should return the following string in the p JSX element, as indicated in the starting code:

// {X}°C is {Y}°F and {Z}K.

// Remember that X, Y and Z represent the temperature in Celsius, Fahrenheit and Kelvin respectively.

// Use the formulas below for the conversions.

// Celsius to Kelvin: K = C + 273.15

// Celsius to Fahrenheit: F = (C * 9/5) + 32

// Directions
// Do not edit the data-testid attributes
// You should round any numbers to 2 decimal points
// Return the output string in a p JSX element
// You can import any methods from the react library.

import './App.css'

function App() {
  return (
    <div className='App'>
      <input data-testid='input-id' type='number' />
      °C
      <p>{/* Write the string here */}</p>
    </div>
  )
}

export default App
