import React, { useState } from "react";

import { useParams } from "react-router-dom";

import axios from 'axios'


import 'antd/dist/antd.css';

import './BlogDetailStyle.css'

export default function Blog(props) {

  let { id } = useParams();

  const [blog, setBlog] = useState({})
  
   
  axios.get(`https://blog-api-tvh.herokuapp.com/api/blogs/${id}`)
      .then(result => {
        setBlog(result.data.blog)
      })
      .catch(error => {
        console.log(error)
      })
  return (
    <div class="blog-show">
      <div class="head_wallpaper"></div>
      <div class="detail">
        <div class="head">
          <img src={blog.avatar} alt="demo" />

          <div class="describe">
            <h1>{blog.title}</h1>
            <p>{blog.createAt}</p>
            <p>
              {blog.description}
              
            </p>
          </div>
        </div>
        <div class="main">
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
}
