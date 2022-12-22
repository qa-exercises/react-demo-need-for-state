import './style.css'
import React from 'react'

let temperature = 20

function increaseTemperature() {
  temperature += 1
  console.log(temperature)
}

function decreaseTemperature() {
  temperature -= 1
  console.log(temperature)
}

export default function App() {
  return (
    <main>
      <h1>🌡️ React Thermostat</h1>
      <h2>{temperature}°C</h2>
      <div>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </main>
  )
}
