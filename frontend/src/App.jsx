import React from 'react'
import { MapContainer, TileLayer ,useMap, Marker, Popup } from 'react-leaflet'
import Mapsection from './components/Mapsection'
import Leftsection from './components/Leftsection'
import axios from 'axios'
import cors from 'cors'

const App = () => {


    function sendPosition(latlng)
    {
      console.log("sending data")
      axios.post('http://localhost:8000', {
				data: "data"	})
        .then((res) =>
        {
          console.log(res)
        })
    }

    sendPosition();

  return (
    <div className='flex flex-row flex-auto '>
  <Leftsection></Leftsection>
  <Mapsection></Mapsection>

  </div>
  )
}

export default App
