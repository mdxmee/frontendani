import React from 'react'
import Header from './Components/Pages/Header'
import { Routes, Route } from 'react-router-dom'
import Createanime from "./Components/Createanime"
import Manga from "./Components/Manga"
import Chat from './Components/Chat'


function App() {
  return (
    <div> 
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/Createanime' element={<Createanime />} /> 
          <Route path='/Manga' element={<Manga />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </div>
    
  )
}

export default App