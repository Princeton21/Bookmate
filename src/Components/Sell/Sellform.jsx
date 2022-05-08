import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../../Firebase/Utilities'
import {collection , getDocs, addDoc} from "firebase/firestore"
import './sellform.css'
import { async } from '@firebase/util'

function Sellform() {
 const [users,setUsers] = useState([]);
 const usersCollectionRef = collection(db,"books");
 const [productImg, setProductImg] = useState(null);
const [error, setError] = useState('');
const types = ['image/png', 'image/jpeg']; // image types

 useEffect(() =>{
     const getUsers = async () => {
         const data = await getDocs(usersCollectionRef);
         setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
     }
     getUsers();
 },[]);

 const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
        setProductImg(selectedFile);
        setError('')
    }
    else {
        setProductImg(null);
        setError('Please select a valid image type (jpg or png)');
    }
}

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
            <label htmlFor="product-img">Product Image</label>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
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