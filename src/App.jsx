import React, { useState } from 'react'
import PageLayout from './layout/PageLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <>
    <CssBaseline/>
      <Router>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index path='/' element={<Home/>}/>
            {/* <Route index path='/test' element={<Home/>}/> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App