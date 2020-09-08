import React from "react";
import { Link } from "react-router-dom"
import "antd/dist/antd.css";

import './BlogCardStyle.css'

export default function BlogCard(props) {
  const { 
     article
    } = props;
  return (
    <div className="article">
      <div className="describe__card">
        <img src= {article.avatar} alt="demo" />
        <div>
          <Link to={`/blog/${article._id}`}> 
            <h2>{article.title}</h2>
          </Link>
          <p> {article.createAt} </p>
          <p>{article.description}</p>
        </div>
      </div>
      {article.content}
    </div>
  );
}
