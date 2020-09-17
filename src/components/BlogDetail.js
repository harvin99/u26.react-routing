import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from './axios'

import 'antd/dist/antd.css';

import './BlogDetailStyle.css'

export default function BlogDetail({fetchUrl}) {

  let { id } = useParams();

  const [blog, setBlog] = useState({})
  
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(`/${fetchUrl}/${id}`)
      setBlog(request.data.blog)
      return request
    }
    fetchData()
  }, [fetchUrl]) 
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
