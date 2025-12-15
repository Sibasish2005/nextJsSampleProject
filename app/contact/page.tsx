import React from 'react'
import Contact from './contact'
import Particles from '../components/particleBackround'

export default function Page() {
  return (
    <div className='bg-black'>
       
      {/* Background particles */}
     
      <div className="z-20">
        <Contact/>
      </div>
      
    </div>
  )
}
