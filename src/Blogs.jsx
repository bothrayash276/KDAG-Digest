import React from 'react'
import ClassicSpinner from './Components/Loading'
import { useEffect, useState } from 'react'

const Blogs = () => {

  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const fetchBlogs = await fetch('http://localhost:3000/posts');
        setBlogs(fetchBlogs);
      } catch (e) {
        console.log(e);
      }
      finally {
        setLoading(false);
      }
    }
    getBlogs()
    
  }, [])
  


  if(loading) return (
    <>
    <ClassicSpinner />
    </>
  )

  return (
    <>
    {/* Body Container */}
    <div
    className='h-full w-full flex sm:flex-row not-sm:flex-col'>
      
    </div>
    </>
  )
}

export default Blogs
