import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Home"
        
        },
        {
            path:"/About",
            name:"About"
        
        },
        {
            path:"/Portfolio",
            name:"Portfolio"
        
        },
        {
            path:"/Contact",
            name:"Contact"
        
        }

    ]
  return (
    <div className='container'>
        
        <div className='navbar'> 
        <div className='myname'> <h2>Bhaskar <span style={{color:"yellow"}}>NYK</span> </h2></div>  
        <div className='items'>
            {
                  
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className='link_text'>{item.name}</div>
                    </NavLink>
                    
                ))
            }
            
            </div>
        </div>
       <main>{children}</main>
    </div>
  )
}

export default Navbar
