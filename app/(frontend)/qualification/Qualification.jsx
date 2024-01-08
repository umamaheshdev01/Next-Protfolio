import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {


    const [toggle,setToggle] = useState(1)

    const toggleTab = (i)=>{
        setToggle(i);
    }






  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={()=>toggleTab(1)} className={toggle===1? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap  qualification__icon"> </i> Education
                </div>

                <div onClick={()=>toggleTab(2)} className={toggle===2? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"> </i> Experience
                </div>
            </div>

            <div className="qualification__sections">

                <div className={toggle===1? "qualification__content qualification__content-active" : "qualification__content "}>





                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Primary School</h3>
                            <span className="qualification__subtitle">TVR School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2010-2020
                            </div>
                        </div>

                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>




                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">Narayana College</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2020 - 2022
                            </div>
                        </div>

                        
                    </div>



                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">B-Tech</h3>
                            <span className="qualification__subtitle">Nit Kurukshetra</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2022 - Present
                            </div>
                        </div>

                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>




                    {/* <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">App Developer</h3>
                            <span className="qualification__subtitle">Spain-Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2021 - Present
                            </div>
                        </div>

                        
                    </div> */}


                    

                </div>



<div className={toggle===2? "qualification__content qualification__content-active" : "qualification__content "}>

<div className="qualification__data">
    <div className="">
        <h3 className="qualification__title">Web Development</h3>
        <span className="qualification__subtitle">Nit Kurukshetra</span>
        <div className="qualification__calender">
            <i className="uil uil-calender"></i> 2022 - Present
        </div>
    </div>

    <div className="">
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
    </div>
</div>

{/* <div className="qualification__data">
    <div className=""></div>
    <div className="">
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
    </div>
    <div className="">
        <h3 className="qualification__title">App Developer</h3>
        <span className="qualification__subtitle">Spain-Institute</span>
        <div className="qualification__calender">
            <i className="uil uil-calender"></i> 2021 - Present
        </div>
    </div>

    
</div> */}

{/* <div className="qualification__data">
    <div className="">
        <h3 className="qualification__title">Web Developer</h3>
        <span className="qualification__subtitle">Spain-Institute</span>
        <div className="qualification__calender">
            <i className="uil uil-calender"></i> 2021 - Present
        </div>
    </div>

    <div className="">
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
    </div>
</div> */}

{/* <div className="qualification__data">
    <div className=""></div>
    <div className="">
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
    </div>
    <div className="">
        <h3 className="qualification__title">App Developer</h3>
        <span className="qualification__subtitle">Spain-Institute</span>
        <div className="qualification__calender">
            <i className="uil uil-calender"></i> 2021 - Present
        </div>
    </div>

    
</div> */}


</div>






















            </div>
        </div>
    </section>
  )
}

export default Qualification