import React from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
  return (
    <div className='homecontainer'>
      <div className='homedivs'>
          <div className='leftbox'> 
            <p>Hello,</p>
            <h2>I'm <span style={{color:"yellow"}}>     <Typewriter words={['Bhaskar']} loop={Infinity  } cursor cursorStyle='|' /></span></h2>
            <h2>Website Designer</h2>
            <p>Iam a skilled and passionate web designer with experience in creating visually appearing and user-friendly websites</p>
            <button style={{padding:"10px",width:"100px",borderRadius:"20px",border:"none ",marginTop:"15px",cursor:"pointer",}}>Hire me</button>
          </div>
           
             <div className='rightbox'></div>   
       
         
      </div>
      
    </div>
  )
}

export default Home
