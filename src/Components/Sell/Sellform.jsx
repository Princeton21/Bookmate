import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../../Firebase/Utilities'
import {collection , getDocs, addDoc} from "firebase/firestore"
import './sellform.css'
import Sellformimg from './Sellformimg'

function Sellform() {
 const [users,setUsers] = useState([]);
 const usersCollectionRef = collection(db,"books");

 const [newYear,setNewYear] = useState("");
 const [newBook,setNewBook] = useState("");
 const [newPrice,setNewPrice] = useState(0);
 const [newDet,setNewDet] = useState("");   //newDet == newdescription about the book
 const [newImgUrl,setNewImgUrl] = useState("");



 const [newUrl,setNewUrl] = useState("");


 const createUser = async (e) => {
     e.preventDefault()
     await addDoc(usersCollectionRef,{
         year:newYear,
         book:newBook,
         price:Number(newPrice),
         description:newDet,
         url:newUrl
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
            <br />
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
            <br />
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

            <br />
            {/* <label>Book Image</label>
                <input type="file" className='form-control' id="file" required
                    onChange={(event) =>{
                        setNewImgUrl(event.target.value)
                    }} /> */}
            <Sellformimg setNewUrl = {setNewUrl} />
                <br />
            
            <label>

                Description:
                <textarea 
                placeholder='Describe the book in short'
                onChange={(event) => {
                    setNewDet(event.target.value)
                }}
                ></textarea>
            </label>
            <br />
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