'use client'
import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Header from '../header/Header'
import CP from './CP'
import Qualification from '../qualification/Qualification'
const Skills = () => {
  return (
    <>
    <Header></Header>
    <Qualification></Qualification>
    <section className="skills section" id="skills">
        <h2 className="section__title">
            Skills
        </h2>
        <span className="section__subtitle">
        My Technical Level
        </span>

        <div className="skills__container container grid">
            <Frontend></Frontend>
            <Backend></Backend>
            <CP></CP>

        </div>
    </section>
   
    </>
  )
}

export default Skills