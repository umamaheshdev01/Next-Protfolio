import React, { useEffect, useState } from 'react'
import { blogsData ,blogsNav } from './Data'
import Workitem from './Workitem'


const Works = () => {

  const [item,setItem] = useState({name : 'all'});
  const [projects,setProjects] = useState([])
  const [active,setActive] = useState(0)

useEffect(()=>{
  if(item.name==='all'){
    setProjects(blogsData)
  }
  else{
    const newProjects = blogsData.filter((project)=>{
      return project.category === item.name
    })
    setProjects(newProjects)
  }
},[item])


const handleClick = (e,index)=>{
    setItem({name : e.target.textContent})
    setActive(index)
}

  return (
    <div className="">

<div className="work__filters">
       {blogsNav.map((item,index)=>{
          return(
            <span onClick={(e)=>{handleClick(e,index)}} className={`${active===index ? 'active-work':''} work__item`} key={index}>
                {item.name}
            </span>
          )
       })}
    </div>

    <div className="work__container  container grid">
        {projects.map((item)=>{
             return  <Workitem item={item} key={item.id}></Workitem>
        })}
    </div>

    </div>
  )
}

export default Works