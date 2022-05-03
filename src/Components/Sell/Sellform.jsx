import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../../Firebase/Utilities'
import {collection , getDocs, addDoc} from "firebase/firestore"
import './sellform.css'
import { async } from '@firebase/util'

function Sellform() {
 const [users,setUsers] = useState([]);
 const usersCollectionRef = collection(db,"books");

 useEffect(() =>{
     const getUsers = async () => {
         const data = await getDocs(usersCollectionRef);
         setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
     }
     getUsers();
 },[]);

 //creating and adding the details to the firestore database
 const [newYear,setNewYear] = useState("");
 const [newBook,setNewBook] = useState("");
 const [newPrice,setNewPrice] = useState(0);
 const [newDet,setNewDet] = useState("");//newDet == newdescription about the book
 

 const createUser = async () => {
     await addDoc(usersCollectionRef,{
         year:newYear,
         book:newBook,
         price:Number(newPrice),
         description:newDet
        })
 }





  return (
      
    <>
        <div className="sell-box">
        <form>
            <h2>Post Advertisement</h2>
            <div className="form">
            <label>
                Year:
                <input 
                type="text" 
                name="class" 
                placeholder="FE/SE/TE/BE"
                onChange={(event) => {
                    setNewYear(event.target.value)
                }}
                 />
            </label>
            <label>
                Name of the Book:
                <input 
                type="text" 
                name="name" 
                placeholder="Enter the books name"
                onChange={(event) => {
                    setNewBook(event.target.value)
                }}
                />
            </label>
            <label>
                Total price:
                <input 
                type="number" 
                name="name" 
                placeholder="Enter the price"
                onChange={(event) => {
                    setNewPrice(event.target.value)
                }}
                />
            </label>
            <label>
                Description:
                <textarea 
                placeholder='Describe the book in short'
                onChange={(event) => {
                    setNewDet(event.target.value)
                }}
                ></textarea>
            </label>
            </div>
            <div className="post">
            <input type="submit" value="Post" onClick={createUser}/>
            </div>
        </form>
        </div>
    </>
  )
}

export default Sellform