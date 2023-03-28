import React from 'react'
import { MapContainer, TileLayer ,useMap, Marker, Popup } from 'react-leaflet'
import Mapsection from './components/Mapsection'
import Leftsection from './components/Leftsection'

const App = () => {
  return (
    <div className='flex flex-row flex-auto '>
  <Leftsection></Leftsection>
  <Mapsection></Mapsection>

  </div>
  )
}

export default App
