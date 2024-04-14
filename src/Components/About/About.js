import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='aboutcontainer'>
      <div className='aboutdivs'>
         <div className='maindiv'>
          
            <div className='heading1'>
               <h2 style={{marginLeft:"40%",marginBottom:"10px",fontSize:"35px"}}>What I do</h2>
            
               <span >
                Iam a skilled and passionate web designer with experience in creating visually appealing and 
                user-friendly websites.I have a strong understanding of design and a keen eye for detail.
                iam proficient in HTML, CSS ,JavaScript,Java Programming, and ReactJS,as well as design
                software such as Adobe photoshop and illustartor.
                </span>
            </div>
            <div className='uiux1'>
                <div className='uipic'>  </div>
                <h2 style={{color:"white"}}>UI/UX Design</h2>
            </div>
            <div className='uiux2'>
              <div className='uipic2'></div>
              <h2 style={{color:"white"}}>Website Design</h2>
              </div>
            <div className='uiux3'>
              <div className='uipic3'></div>
              <h2  style={{color:"white"}}>Java Developer</h2>

             </div>
         </div>
      </div>
    
    </div>
  )
}

export default About
