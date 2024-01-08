'use client'
import React from 'react'
import './work.css'
import Works from './Works'
import Header from '../header/Header'

const Work = () => {
  return (
    <>
    <Header></Header>
    <section className="work section" id="protfolio">
    <h2 className="section__title">Blogs</h2>
    <span className="section__subtitle">My thoughs and theories</span>

    <Works></Works>

</section></>
    
  )
}

export default Work