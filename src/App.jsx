import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Sweets from './Pages/Sweets'
import Pechenye from './Pages/Pechenye'
import Drinks from './Pages/Drinks'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/sweets' element={<Sweets />} />
          <Route path='/pechenye' element={<Pechenye />} />
          <Route path='/drinks' element={<Drinks />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App