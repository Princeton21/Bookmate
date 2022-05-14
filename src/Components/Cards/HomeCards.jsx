import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './HomeCards.css'
import {collection , getDocs , doc ,deleteDoc} from "firebase/firestore"
import { db } from '../../Firebase/Utilities'
<<<<<<< Updated upstream
// import { cardInfo } from './Card_data';
=======
import { cardInfo } from './Card_data';
import { BsSuitHeartFill } from "react-icons/bs"
>>>>>>> Stashed changes

const HomeCards = () => {
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db,"books");

  useEffect(() =>{
      const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      }
      getUsers();
  });

  const deleteBook = async (id) => {
    const userDoc = doc(db,"books",id);
    await deleteDoc(userDoc);
  }
   
    // return <div className="card-main-body">{cardInfo.map((user) =>{
    return <div className="card-main-body">{users.map((user) =>{
      return ( 
        <>
          <div className='card-container'>
            <button className='card-heart'><BsSuitHeartFill  ></BsSuitHeartFill></button>
            <div className="card-image">
            <img src={user.url} alt="This the book pic"/>
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
              <button className='card-btn' onClick={() => {
                deleteBook(user.id)
              }}>Delete book</button>
              </div>
          </div>
        </>
      );
    })}</div>;
}

export default HomeCards