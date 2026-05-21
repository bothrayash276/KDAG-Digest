import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/* Header Container*/}
      <div
      className='w-full flex items-center gap-3 sm:justify-between'>

        {/* Logo */}
        <img 
        src="logo.png" 
        alt="The KDAG Digest"
        className='h-10 not-sm:hidden'
         />

        <img src="icon.png" alt="The KDAG Digest" 
        className='h-10 sm:hidden'/>

        {/* Search Bar */}
        <div className='flex-1 gap-5 border-2 border-[#333333] bg-[#1a1a1a] h-12 flex items-center px-5 py-6 rounded-xl sm:max-w-[50vw]'>
          <img src="/search.svg" alt="" className='h-5' />
          
          <input type="text" placeholder='Search' 
          className='placeholder:text-white flex-1 outline-none text-white'/>
        </div>

        
      {/* Buttons */}
      <div
      className='flex gap-8 justify-start not-sm:hidden'>
          {/* Home Button */}
        <Link 
        to={'/'}
        className='text-white hover:text-[#E92F30]'>
        Home
        </Link>

        {/* Blog Button */}
        <Link 
        to={'/blogs'}
        className='text-white hover:text-[#E92F30]'>
        Blogs
        </Link>
      </div>

      </div>
    </>
  )
}

export default Header
