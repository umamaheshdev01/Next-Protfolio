'use client'
import React, { useState } from 'react'
import './header.css'
import { data } from '../Data'
import Link from 'next/link'

const Header = () => {
    const[Toggle,showMenu] =useState(false)
  return (
    <header className="header">
        <nav className="nav container">
            <Link href="/home" className="nav__logo">{data.name}</Link>

            <div onClick={()=>{showMenu(!Toggle)}} className={Toggle? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <Link href="/home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i> Home
                    </Link>
                </li>

                <li className="nav__item">
                    <Link href="/about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i> About
                    </Link>
                </li>

                <li className="nav__item">
                    <Link href="/skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i> Skills
                    </Link>
                </li>

                <li className="nav__item">
                    <a href="/protfolio" className="nav__link">
                        <i className="uil uil-briefcase nav__icon"></i> Protfolio
                    </a>
                </li>

                <li className="nav__item">
                    <a href="/blogs" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i> Blogs
                    </a>
                </li>

                <li className="nav__item">
                    <Link href="/contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i> Contact
                    </Link>
                </li>
            </ul>
            <i className="uil uil-times nav__close" onClick={()=>showMenu(prev => !prev)}></i>
        </div>

         <div className="nav__toggle" onClick={()=>showMenu(prev => !prev)}>
         <i className="uil uil-apps"></i>
         </div>

        </nav>
        
        
    </header>
  )
}

export default Header