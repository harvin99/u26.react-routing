import React, { useState } from "react";

import axios from 'axios'
import { List } from 'antd';
import BlogCard from './BlogCard'

import './BlogStyle.css'

export default function Blog(props) {

  const [blogs, setBlogs] = useState([])

    axios.get('https://blog-api-tvh.herokuapp.com/api/blogs')
      .then(result => {
        setBlogs(result.data.blogs)
      })
      .catch(error => {
        console.log(error)
      })
  return (
    // <div>
    //   <h2>Blog page</h2>
    //   {blogs.map((blog, index) => (
    //     <BlogCard article = {blog} />
    //   ))}
    // </div>
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
