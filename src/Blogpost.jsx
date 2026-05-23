import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ClassicSpinner from './Components/Loading';

const Blogpost = () => {
    // Getting ID from the webpage
    const {uid} = useParams();
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const getBlogpost = async () => {
            try {
                const BlogpostFile = await fetch(`http://localhost:3000/posts/${uid}`)
                const BlogpostData = await BlogpostFile.json();
                setBlog(BlogpostData[0]);
            } catch (e) {
                console.log(e);
            }
            finally {
                setLoading(false)
            }
        }
        getBlogpost()
    }, [])


    // Loading Page
    if(loading) return (
        <><ClassicSpinner/></>
    )

  return (
    <>
    <div
    className='p-4 flex flex-col gap-10'>
        {/* Image */}
    <img 
    src={blog.img_url} 
    alt="" 
    className='rounded-xl max-h-40 aspect-square'/>

    {/* Title */}
    <span
    className='text-2xl font-bold flex justify-center align-middle'>
        {blog.title}
    </span>

    {/* Domain */}
    <span
    className='flex justify-center align-middle font-bold text-neutral-500'>
        {blog.domain}
    </span>

    <span
    className='flex justify-center align-middle'>
        {blog.paragraph}
    </span>
    
    </div>
    </>
  )
}

export default Blogpost
