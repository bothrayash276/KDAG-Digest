import React from 'react'
import Home from './Home'
import Blogs from './Blogs.jsx'
import Blogpost from './Blogpost.jsx'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<><Header/><Home /></>}/>
      <Route path={'/blogs'} element={<><Header/><Blogs /></>} />
      <Route path={'/blogs/:uid'} element={<><Header /><Blogpost /></>} />
    </Routes>
    </>
  )
}

export default App
