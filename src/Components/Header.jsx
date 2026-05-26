import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from './Dropdown'

const Header = ({setSearchbar, filter, setFilter, domain, setDomain, tags, setTags, apply, setApply}) => {


  return (
    <>
      {/* Header Container*/}
      <div
      className='w-full flex items-center gap-3 sm:justify-between relative'>

        {/* Logo */}
        <img 
        src="./logo.png" 
        alt="The KDAG Digest"
        className='h-10 not-sm:hidden'
         />

        <img src="./icon.png" alt="The KDAG Digest" 
        className='h-10 sm:hidden'/>



        {/* Search Bar */}
        <div className='flex-1 gap-5 border-2 border-[#333333] bg-[#1a1a1a] h-12 flex items-center px-5 py-6 rounded-xl sm:max-w-[50vw] relative'>
          <img src="/search.svg" alt="" className='h-5' />
          
          <input type="text" placeholder='Search by title or author' 
          className='placeholder:text-white flex-1 outline-none text-white'
          onChange={(e)=>{setSearchbar(e.target.value)}}/>

          <img src="./filter.svg" 
          alt="" 
          className='h-5 cursor-pointer not-sm:hidden'
          onClick={()=>{setFilter(!filter)}} />

          <Dropdown
          domain={domain}
          setDomain={setDomain}
          tags={tags}
          setTags={setTags}
          filter={filter} 
          setFilter={setFilter}
          apply={apply}
          setApply={setApply} />

        </div>

        
      {/* Buttons */}
      <div
      className='flex gap-8 justify-start not-sm:hidden'>
          {/* Home Button */}
        <Link 
        to={'/'}
        className='text-white hover:text-[#E92F30] flex gap-2 cursor-pointer justify-center align-middle'>
        <img src="./HOMEBUTTON.svg" alt="" 
        className='h-5'/>
        </Link>

      </div>

      <img src="./filter.svg" alt="" 
      className='h-8 sm:hidden' 
      onClick={()=>{setFilter(true)}} />

      </div>
    </>
  )
}

export default Header
