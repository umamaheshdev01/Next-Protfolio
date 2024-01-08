'use client'
import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import Header from '../header/Header'
import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <>
    <Header></Header>
    <section className="home section" id="home" >
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social></Social>

                <div className="home__img"></div>
                
                <Data></Data>
            </div>

            <ScrollDown></ScrollDown>
      
        </div>
    </section>
    </>
  )
}

export default Home