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


    // Function to get the color of the tag
  const tagColor = (tag) => {

    if (tag.length < 4) return "bg-[#1E3A8A]"
    else if (tag.length < 8) return "bg-[#14532D]"
    else if (tag.length < 12) return "bg-[#4C1D95]"
    else if (tag.length < 16) return "bg-[#7F1D1D]"
    else return "bg-[#27272A]"
    
    }


    // Loading Page
    if(loading) return (
        <><ClassicSpinner/></>
    )

  return (
    <>
    <div
    className='p-4 flex flex-col gap-10'>
        {/* Image */}
    <div
    className='flex justify-center align-middle'>
        <img 
        src={blog.img_url} 
        alt="" 
        className='rounded-xl max-h-100 max-w-100'/>
    </div>

    {/* Title */}
    <span
    className='text-4xl font-bold flex justify-center align-middle'>
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

    <div
    className='flex not-sm:flex-col gap-4 justify-center align-middle my-10'>
        {/* Tags */}
        <div
        className='flex flex-1 gap-4'>
            {blog.tags.map(tag => {
                return (
                    <div
                    key={`${blog.uid}, ${tag}`}
                    className={`${tagColor(tag)} p-1 px-2 rounded-lg`}>
                        {tag}
                    </div>
                )
            })}
        </div>

            <div
            className='text-neutral-500'>
                {blog.author} &#183; {blog.date}
            </div>

    </div>
    </>
  )
}

export default Blogpost
