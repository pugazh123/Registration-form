import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



export const  SignIn= (props) => {
    const navigate=useNavigate()
  return(
    <form className='Home'>
        <div className='Home1'>
            <br /><h2>LOGIN FORM<hr /></h2><br />

            <input type="text" placeholder='Phone' required></input><br /><br />
            <input type="password" placeholder='Password' required></input><br /><br /><br />
            <NavLink to='/signin/successfully'>
            <button onClick={()=>navigate('/signin/successfully')}>Login</button><br /><br />
            <NavLink to='/'>Create an account</NavLink><br />
            
            </NavLink>
            
        </div>
    </form>
   )
  }
