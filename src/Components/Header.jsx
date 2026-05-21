import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/* Header Container */}
      <div
      className='w-full flex items-center'>

        {/* Logo */}
        <img 
        src="logo.png" 
        alt="The KDAG Digest"
        className='h-10'
         />

        {/* Search Bar */}
        <input 
        type="text" 
        className='flex-2 bg-none rounded-4xl outline-none border border-neutral-400 mx-5 text-white placeholder-neutral-400 px-8 h-12'
        placeholder='Search'
        />

        {/* Blog Button */}
        <Link 
        to={'/blogs'}
        className='text-[#E92F30] border-2 p-3 px-6 rounded-xl hover:text-white hover:bg-[#E92F30] hover:border-[#E92F30] font-[Space_Mono]'>
        Blogs
        </Link>

      </div>
    </>
  )
}

export default Header
