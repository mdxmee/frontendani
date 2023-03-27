import React from 'react'
import Aniall from '../aniall/Aniall'
import Daliynews from '../Dalynews/Daliynews'
import Nav from '../NavBar/Nav'
import Slider from '../Slider/Slider'
import Animedb from '../Animedb'

function Header() {
    
  return (
    <div className='relative container mx-auto p-6'>
        
        <Nav />

        <Slider/>

        <Aniall />

        <Daliynews />

        <Animedb />

    </div>
  )
}

export default Header