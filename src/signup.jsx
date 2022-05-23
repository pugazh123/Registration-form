import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const  SignUp= () => {
  const navigate=useNavigate()
  return(
    <div className='login'>
        <h2>You have Register Successfully !!!</h2>
        <div className='Asu'>
          <NavLink to='/signin'><button onClick={()=>navigate('/signin')}>Sign In</button></NavLink>
        </div>
    </div>
   )
  }
