import React from 'react'
import { data } from '../Data'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                
    
                    
                <div className="skills__group">

                {data.backendskills.map((item)=>{return(<div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">{item.name}</h3>
                        <span className="skills__level">{item.level}</span>
                    </div>
                </div> )})}      
    
                  </div>
    
    
    
            </div>
        </div>
      )
}

export default Backend