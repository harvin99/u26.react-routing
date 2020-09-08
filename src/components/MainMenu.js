import React from 'react'

import { Link } from "react-router-dom"

export default function MainMenu(props) {
  const navStyle = {
    color: 'white'
  }
    return (
          <ul className = "nav_links">
            <li>
              <Link style = {navStyle} to="/">Home</Link>
            </li>
            <li>
              <Link style = {navStyle} to="/blog">Blog</Link>
            </li>
            <li>
              <Link style = {navStyle} to="/about">About me</Link>
            </li>
          </ul>
    );
}
