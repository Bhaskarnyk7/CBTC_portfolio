import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div className='contactcontainer'>
      <div className='contactdiv'>
        <div className='allitems'>
          <div>
            <h1 style={{color:"white",marginLeft:"150px"}}>Contact Me</h1>
            <span style={{color:"white"}}> Please fill out the form below to discuss any work opportunities</span>
          </div>
          <div >
            <input  placeholder='Your name' style={{width:"70%",padding:"10px",marginBottom:"10px",marginTop:"10px",border:"none",outline:"none"}}></input>
          </div>
          <div>
            <input  placeholder='Your Email'style={{width:"70%",padding:"10px",marginBottom:"10px",border:"none",outline:"none"}}></input>
          </div>
          <div>
            <textarea placeholder='Your Message'style={{width:"73%",height:"100px",border:"none",outline:"none"}}></textarea>
          </div>
           
           <button style={{height:"40px",width:"120px",marginLeft:"150px",marginTop:"25px",backgroundColor:"white",color:"black",borderRadius:"20px",cursor:"pointer",border:"none",outline:"none"}}>Submit</button>
      </div>
      </div>
     
    </div>
  )
}

export default Services
