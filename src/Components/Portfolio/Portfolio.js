import React from 'react'
import './Portfolio.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Portfolio() {
  return (
    <div className='portcontainer'>
      <div className='progress'>
          <div style={{ width: 150, height: 200 }}>
            <CircularProgressbar value={80} text={`${90}%`}  />
            <h3 style={{marginLeft:"47px"}}>HTML</h3>
          </div>
          <div style={{ width: 150, height: 200 }}>
          <CircularProgressbar value={80} text={`${80}%`} />
          <h3 style={{marginLeft:"60px"}}>CSS</h3>
          </div>
          <div style={{ width: 150, height: 200 }}>
          <CircularProgressbar value={80} text={`${60}%`} />
          <h3 style={{marginLeft:"26px"}}>JAVASCRIPT</h3>
          </div>
          <div style={{ width: 150, height: 200  }}>
          <CircularProgressbar value={80} text={`${70}%`} />
          <h3 style={{marginLeft:"40px"}}>REACTJS</h3>
          </div>
          <div style={{ width: 150, height: 200 }}>
          <CircularProgressbar value={80} text={`${80}%`} />
          <h3 style={{marginLeft:"53px"}}>JAVA</h3>
          </div>
      </div>
    </div>
  )
}


