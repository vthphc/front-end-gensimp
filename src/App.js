import React from 'react'
import HomePage from './components/homePage'
import { Route, Routes } from 'react-router-dom'
import Characters from './components/characters'
import Weapons from './components/weapons'
import Elements from './components/elements'
import CharacterDetails from './components/characters/detail'
import CharacterInputTable from './components/inputCharacter'

export default function App() {
  return (
    <div className='flex bg-zinc-800 flex-1 flex-col'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/:id' element={<CharacterDetails />} />
        <Route path='/weapons' element={<Weapons />} />
        <Route path='/elements' element={<Elements />} />
        <Route path='/add-character' element={<CharacterInputTable />} />
        <Route path='*' element={<div>Not Found, 404</div>} />
      </Routes>
    </div>
  )
}
