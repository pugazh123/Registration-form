import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



export const  SuccessFully= () => {
  const navigate=useNavigate()
  return(
    <div className='login'>
    
    
    <h1>Welcome!!!<br />Logged in successfully</h1>
    <NavLink to='/signin/successfully/Home'><button onClick={()=>navigate('/signin/successfully/Home')}>Go Home</button></NavLink>
        
    </div>
   
  
  )
  }
