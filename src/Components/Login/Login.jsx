import React from 'react'
import SignIn from './Signin/SignIn'
import './Login.css'
import Navbar from '../../Navbar'
const Login = ({user}) => {
  return (
    <>
    <Navbar user={user}/>
    <SignIn/>
    </>
  )
}

export default Login