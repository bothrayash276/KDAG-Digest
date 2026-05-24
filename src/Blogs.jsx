import React from "react";
import ClassicSpinner from "./Components/Loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const fetchBlogs = await fetch("http://localhost:3000/posts");
        const blogData = await fetchBlogs.json();
        setBlogs(blogData);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);



  // Function to truncate paragraph
  const truncate = (para) => {
    let e = ""
    if(para.length < 150) return e;
    for (let letter = 0; letter < 150; letter++) {
      e += para[letter];      
    }
    e += "....."
    return e;
  }


  // Function to get the color of the tag
  const tagColor = (tag) => {

    if (tag.length < 4) return "bg-[#1E3A8A]"
    else if (tag.length < 8) return "bg-[#14532D]"
    else if (tag.length < 12) return "bg-[#4C1D95]"
    else if (tag.length < 16) return "bg-[#7F1D1D]"
    else return "bg-[#27272A]"
    
    }
  

  if (loading)
    return (
      <>
        <ClassicSpinner />
      </>
    );

  return (
    <>
      {/* Body Container */}
      <div className="h-full w-full flex flex-wrap justify-evenly gap-6 py-10 px-5">
        {blogs.map((obj) => {
          return (
            <>
              <Link 
              to={`/blogs/${obj.uid}`}
              className="bg-[#0f0f0f] p-4 flex flex-col  rounded-lg gap-4 max-w-sm cursor-pointer hover:border-y hover:border-red-500" 
              key={`${obj.uid} box`}>
              
                {/* IMAGE */}
                <img 
                src={`${obj.img_url}`} 
                alt="" 
                className="rounded-md"
                key={`${obj.uid} image`} />

                {/* Domain */}
                <div
                className="text-sm text-neutral-500 font-bold">
                  {obj.domain}
                </div>

                {/* Title */}
                <div 
                className="text-2xl font-bold"
                key={`${obj.uid} title`}>
                  {obj.title}
                </div>

                {/* Details */}
                <div 
                className="text-neutral-500 text-[16px]"
                key={`${obj.uid} para`}>
                  {truncate(obj.paragraph)}
                </div>

                {/* Tags */}
                <div 
                className="flex flex-wrap gap-2"
                key={`${obj.uid} tagbox`}>
                  
                  {obj.tags.map(tag => {
                    return (
                      <p
                      className={`p-1 px-2 text-sm rounded-md ${tagColor(tag)}`}
                      key={`${obj.uid} ${tag}`}>
                      {tag}
                      </p>
                    )
                  })}
                </div>

                {/* Author and Published Date */}
                <div 
                className="flex justify-between text-neutral-500"
                key={`${obj.uid} author and date`}>

                  {/* Author */}
                  <span
                  key={`${obj.uid} author`}>
                    {obj.author}
                  </span>

                  {/* Date */}
                  <span
                  key={`${obj.uid} date`}>
                    {obj.date}
                  </span>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
