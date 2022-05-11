import React, { useState } from 'react'
import { auth } from '../Firebase/Utilities';
import { db } from '../Firebase/Utilities';
import { Link } from 'react-router-dom'
import {collection , addDoc} from "firebase/firestore"

export const Signup = (props) => {

    // defining state
    const usersCollectionRef = collection(db,"SignedUpUsersData");

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const createUser = async () => {
        await addDoc(usersCollectionRef,{
            name:name,
            email:email,
            password:password,
            
           })
    }
   
   
    

    // signup
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container1'>
            <br />
            <h2>Sign up</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={signup}>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="passowrd">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                {/* <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button> */}
                <div className="login-btn">
                <input type="submit" value="SUBMIT" onClick={createUser} />
                </div>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br />
            <span>Already have an account? Login
                <Link to="login1"> Here</Link>
            </span>
        </div>
    )
}
export default Signup