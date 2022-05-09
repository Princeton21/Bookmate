import React from "react"
import "./Form.css"
import { useState,useEffect } from 'react'
import { db } from '../../Firebase/Utilities'
import {collection , getDocs, addDoc} from "firebase/firestore"
import { async } from '@firebase/util'


const Form  = () => {
  
	const [users,setUsers] = useState([]);
 	const usersCollectionRef = collection(db,"Contact");

	 useEffect(() =>{
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
		}
		getUsers();
	},[]);

	const [newName,setNewName] = useState("");
 const [newEmail,setNewEmail] = useState("");
 const [newPhone,setNewPhone] = useState(0);
 const [newMessage,setNewMessage] = useState("");//newDet == newdescription about the book

 const createUser = async () => {
	await addDoc(usersCollectionRef,{
		name:newName,
		email:newEmail,
		phone:Number(newPhone),
		message:newMessage
	   })
}

	return (
	<div className="Contact-page">
    <div className="container">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2 className="contact-title">Get in touch</h2>
				<input type="text" className="field" placeholder="Your Name"
				onChange={(event) => {
                    setNewName(event.target.value)
                }}
				/>
				<input type="text" className="field" placeholder="Your Email"
				onChange={(event) => {
                    setNewEmail(event.target.value)
                }}
				/>
				<input type="number" className="field" placeholder="Phone"
				onChange={(event) => {
                    setNewPhone(event.target.value)
                }}
				/>
				<textarea placeholder="Message" className="field"
				onChange={(event) => {
                    setNewMessage(event.target.value)
                }}
				></textarea>
				<input type="submit" value="send" className="send-btn" onClick={createUser}/>
			</div>
		</div>
	</div>
  </div>
)
}

export default Form