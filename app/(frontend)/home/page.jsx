'use client'
import React, { Suspense,useState,useEffect } from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import Header from '../header/Header'
import ScrollDown from './ScrollDown'
import DrunkImg from '../assets/profile.jpg'
import Image from 'next/image'


const Home = () => {

    




    
  return (
    <>
    <Header></Header>
    <section className="home section" id="home" >
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social></Social>

                <div className="home__img">
                    {/* <Image src={DrunkImg}></Image> */}
                </div>
                

              
                
                <Data></Data>
            </div>

            <ScrollDown></ScrollDown>
      
        </div>
    </section>
    </>
  )
}

export default Home