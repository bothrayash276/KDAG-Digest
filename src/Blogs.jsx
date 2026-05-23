import React from "react";
import ClassicSpinner from "./Components/Loading";
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


  if (loading)
    return (
      <>
        <ClassicSpinner />
      </>
    );

  return (
    <>
      {/* Body Container */}
      <div className="h-full w-full flex flex-wrap justify-evenly gap-4 py-10 px-5">
        {blogs.map((obj) => {
          return (
            <>
              <div className="bg-[#2C2C2C] p-4 flex flex-col  rounded-lg gap-4 max-w-sm ">
                {/* IMAGE */}
                <p>IMAGE</p>

                {/* Title */}
                <div className="text-xl font-bold">{obj.title}</div>

                {/* Details */}
                <div className="text-neutral-500">{truncate(obj.paragraph)}</div>

                {/* Tags */}
                <div className="flex gap-2">
                  {obj.tags.map(tag => {
                    return tag
                  })}
                </div>

                {/* Author and Published Date */}
                <div className="flex justify-between text-neutral-500">
                  <span>{obj.author}</span>
                  <span>{obj.date}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
