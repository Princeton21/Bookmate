import React from 'react'
import './Button.css'
import {FcGoogle} from 'react-icons/fc';
const Button = ({children, ...otherProps}) => {
  return (
    <>
    <button className='btn' {...otherProps}>
    <span className="navbar-toggler-icon" ><FcGoogle size={20} /></span>
      Sign In with Google
    </button>

    </>
  )
}

export default Button