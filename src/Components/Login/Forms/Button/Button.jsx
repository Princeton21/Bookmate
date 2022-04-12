import React from 'react'
import './Button.css'
const Button = ({children, ...otherProps}) => {
  return (
    <>
    <button className='btn' {...otherProps}>
    </button>

    </>
  )
}

export default Button