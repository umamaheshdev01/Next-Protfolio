import React from 'react'
import { data } from '../Data'

const Social = () => {
  return (
    <div className="home__social">
        <a href={data.twitter} className="home__social-icon" target="_blank">
            <i className='uil uil-twitter-alt'></i>
        </a>
        <a href={data.linkedln} className="home__social-icon" target="_blank">
            <i className='uil uil-linkedin'></i>
        </a>
        <a href={data.github} className="home__social-icon" target="_blank">
            <i className='uil uil-github-alt'></i>
        </a>
    </div>
  )
}

export default Social