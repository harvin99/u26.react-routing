import React from 'react'

import './ComponentStyle.css'
import Logo from "./Logo"
import  MainMenu  from "./MainMenu"

export default function Header(props) {
    return(
        <div className = "header">
            <nav>
                <Logo />
                <MainMenu />
            </nav>
        </div>
    )
}