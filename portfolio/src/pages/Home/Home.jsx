import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
const Home = () => {
  return (
    <div className='flex h-screen bg-black gap-4 p-4'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home