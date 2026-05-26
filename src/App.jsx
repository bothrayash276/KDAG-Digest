import React from 'react'
import { useState } from 'react'
import Blogs from './Blogs.jsx'
import Blogpost from './Blogpost.jsx'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'

const App = () => {

  // Search Bar
  const [searchbar, setSearchbar] = useState("")
  const [tags, setTags] = useState([])
  const [filter, setFilter] = useState(false)
  const [domain, setDomain] = useState([])
  const [apply, setApply] = useState([])

  return (
    <>
    <Routes>
      <Route 
      path={'/'} 
      element= 
        {   
          <>
            <Header 
            setSearchbar = {setSearchbar} 
            tags={tags}
            setTags = {setTags} 
            filter={filter} 
            setFilter={setFilter}
            domain={domain}
            setDomain={setDomain}
            apply={apply}
            setApply={setApply} />

            <Blogs 
            searchbar = {searchbar}
            tags = {tags} 
            domain = {domain}
            apply={apply}
            />
          </>
        } />

      <Route 
        path={'/:uid'} 
        element= 
          { <>
              <Header 
              setSearchbar = {setSearchbar} 
              tags={tags}
              setTags = {setTags} 
              filter={filter} 
              setFilter={setFilter}
              domain={domain}
              setDomain={setDomain}
              apply={apply}
              setApply={setApply}  />
              
              <Blogpost />
              </>
          } />

    </Routes>
    </>
  )
}

export default App
