import React from "react";
import ClassicSpinner from "./Components/Loading";
import Blogcard from "./Components/Blogcard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Blogs = ({searchbar}) => {
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
              <Blogcard obj={obj}/>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
