import React from 'react'
import Inputcoord from './Inputcoord'
import Subbotton from './Subbotton'

const Leftsection = () => {
  return (
    <div className='h-screen w-[50%]  bg-black '>
        <div className='flex flex-col items-center'>
        <Inputcoord></Inputcoord>
        <Inputcoord></Inputcoord>
        <Subbotton></Subbotton>
        </div>
    </div>
  )
}

export default Leftsection