import React, { useState } from 'react'
import PageLayout from './layout/PageLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { CssBaseline } from '@mui/material'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


//create a query client
const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<PageLayout />}>
              <Route index path='/' element={<Home />} />
              {/* <Route index path='/test' element={<Home/>}/> */}
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App