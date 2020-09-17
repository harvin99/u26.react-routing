import React, { useState, useEffect } from "react";

import axios from './axios'
import { List } from 'antd';
import BlogCard from './BlogCard'

import './BlogStyle.css'

export default function Blog({fetchUrl}) {

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl)
      setBlogs(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={blogs}
      footer={
        <div>
          <b>Web created by Tran Van Hung</b>
        </div>
      }
      renderItem={(blog) => (
        <List.Item key={blog._id}>
          <BlogCard article = {blog} />
        </List.Item>
      )}
    />
  );
}
