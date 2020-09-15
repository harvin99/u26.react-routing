import React, { useState } from 'react'
import axios from 'axios'

import BlogCard from './BlogCard'

export default function Home(props){
    const [blogs, setBlogs] = useState([])

    axios.get('https://blog-api-tvh.herokuapp.com/api/blogs')
      .then(result => {
        
        setBlogs(result.data.results)
      })
      .catch(error => {
        console.log(error)
      })
      
  return (
    <div>
      <h2>Home page</h2>
      <h2>Top 4 New</h2>
      {blogs
      .sort((d1, d2) => {
                let t1 = new Date(d1.createAt)
                let t2 = new Date(d2.createAt)
                return (t2 - t1);
        }).slice(0, 4)
      .map((blog, index) => (
        <BlogCard article = {blog} />
      ))}
    </div>
  );
}