import './App.css';
import React, {Component} from 'react';
import {Route , Routes} from  'react-router-dom';
import Sell from './Components/Sell/Sell';
import Cart from './Components/Carts Page/Cart'
import Home from './Home';


import Login from './Components/Login/Login';
import Login1 from './login1/Login1';
import Signup1 from './login1/Signup1';

import { auth } from './Firebase/Utilities';
import Contact from './Components/Contact us/Contact';
import NotFound from './Components/404/NotFound';
import Navbar from './Navbar';
import Footer from './Footer';




const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null

  componentDidMount(){  // life cycle hook
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if(!userAuth) return;

      this.setState({
        currentUser:userAuth
      });
    })
  }
  componentWillUnmount(){   // life cycle hook 
    this.authListener();
  }

   render(){
    return (
      <>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path ="/" element = {<Home user={this.state.user}/>} />

        <Route exact path ="/sell" element = {<Sell/>} />
        <Route exact path ="/login1" element = {<Login1/>} />
        <Route exact path ="/login1/Signup1" element = {<Signup1/>} />
        <Route exact path ="/contact" element = {<Contact/>} />
        <Route exact path = "/Cart" element = {
          <>
          <Navbar/>
          <div className='year-name'>
                FE
            </div>
           <Cart/>
           <div className='year-name'>
                SE
            </div>
           <Cart/>
           <div className='year-name'>
                TE
            </div>
           <Cart/>
           <div className='year-name'>
                BE
            </div>
           <Cart/>
           <Footer/>

        </>
        }/>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<NotFound/>} />

      </Routes>
       {/* <Footer/>  */}
      </>
    );
   }
  
}
export default App;
