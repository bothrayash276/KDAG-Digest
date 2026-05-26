import React from "react";
import ClassicSpinner from "./Components/Loading";
import Blogcard from "./Components/Blogcard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Blogs = ({searchbar, domain, tags, apply}) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [blogFile, setBlogFile] = useState([])

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const fetchBlogs = await fetch("http://localhost:3000/posts");
        const blogData = await fetchBlogs.json();
        setBlogFile(blogData);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);


  // Search Bar Operations
  useEffect(() => {
    if(searchbar.length ==- 0 && tags.length === 0 && domain.length === 0) {
      setBlogs(blogFile)
    }
    else {
    const blogByTitle = blogFile.filter(obj => obj.title.includes(searchbar));
    const blogByAuthor = blogFile.filter(obj => obj.author.includes(searchbar));
    
    // Adding Domain Blogs
    const domainSet = new Set()
    const tagsSet = new Set()
    blogFile.forEach(obj => {
      domain.forEach(dm => {
        if (dm === obj.domain) domainSet.add(obj)
      })

      obj.tags.forEach(tag => {
        tags.forEach(tg => {
          if(tg === tag) tagsSet.add(obj)
        })
      })

    })
    
    let intersectionSet

    if(domainSet.size === 0 && tagsSet.size > 0) intersectionSet = tagsSet
    else if(domainSet.size > 0 && tagsSet.size === 0) intersectionSet = domainSet
    else intersectionSet = domainSet.intersection(tagsSet)

    const searchbarBlogs = [...blogByTitle, ...blogByAuthor]
    const searchbarBlogsSet = new Set(searchbarBlogs)
    const blogSet = searchbarBlogsSet.intersection(intersectionSet)
    const customBlogs = [...blogSet]

    setBlogs(customBlogs)
    }
  }, [searchbar, blogFile, apply])
  

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
