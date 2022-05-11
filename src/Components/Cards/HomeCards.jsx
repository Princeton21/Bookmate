import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './HomeCards.css'
import {collection , getDocs} from "firebase/firestore"
import { db } from '../../Firebase/Utilities'
import { cardInfo } from './Card_data';
const HomeCards = () => {
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db,"books");

  useEffect(() =>{
      const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      }
      getUsers();
  },[]);
   
    return <div className="card-main-body">{users.map((user) =>{
      return ( 
        <>
          <div className='card-container'>
            <div className="card-image">
            <img src={user.url} alt="This the book image"/>
            </div>
            <div className="card-body">
              <div className="card-title">
              <h3>{user.book}</h3>
              </div>
              <div className="card-text">
                  <p>{user.price}-Rs</p>
                  <p>{user.description}</p>
              </div>
            </div>
            <div className="card-btn">

              <button onClick={()=>dispatchEvent({
                
              })}>
                <Link to='/cart' id='card-btn-link'>Add to Cart</Link>
                

              </button>
              </div>
          </div>
        </>
      );
    })}</div>;
}

export default HomeCards