import React from 'react'
import Contact from './contact'
import Particles from '../components/particleBackround'

export default function Page() {
  return (
    <div className='bg-black'>
       
      {/* Background particles */}
      <div className="fixed inset-0 ">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          alphaParticles
          moveParticlesOnHover
        />
      </div>
      <div className="z-20">
        <Contact/>
      </div>
      
    </div>
  )
}
