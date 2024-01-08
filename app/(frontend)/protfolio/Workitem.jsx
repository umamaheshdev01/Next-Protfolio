import Image from 'next/image'
import React from 'react'

const Workitem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <Image src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default Workitem