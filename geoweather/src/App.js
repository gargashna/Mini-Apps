import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

//have a form
//using geocoding api convert city to lat and log
//pass tat to geoweather api
//format it ti chart
//display

function App () {
  const [latlong, setLatlong] = useState(null)
  return (
    <div className='App'>
      "Hello Geo Weather App"
      <GeoForm setLatlong={setLatlong} />
      {/* {latlong && <Weatherchart latlong={latlong} />} */}
    </div>
  )
}

function GeoForm ({ setLatlong }) {
  return (
    <form>
      <input type='text' value='Please enter your city' />
    </form>
  )
}

// function WeatherChart () {
//   return <div></div>
// }
export default App
