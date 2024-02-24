import React, { useState } from 'react';
import "./Signup.scss"
import {useNavigate } from "react-router-dom"
import bcrypt from 'bcryptjs';
const Signup = () => {
  const navigate = useNavigate();
 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

      // Store user data in localStorage
      localStorage.setItem(email, JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword
      }));

      // Display success message
      setSuccessMessage('Signup successful. You can now login.');
    console.log(successMessage);
    } catch (error) {
      console.error('Error while hashing password:', error);
    }
  };


  return (
    <div className='SignUp_main'>
      <div className='SignUp_form'>
        <form onSubmit={handleSubmit}>
          <h1>SignUp</h1>

          <div className='firstname'>
            <input type="text" placeholder='FirstName' id='FirstName' onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className='lastname'>
            <input type="text" placeholder='LastName' id='LastName' onChange={(e) => setLastName(e.target.value)} required />
          </div>

          <div className='Email'>
            <input placeholder='Email' type='email' id='Email' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='username'>
            <input placeholder='Password' type='password' id='Password' onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type='submit'>SignUp</button>
        </form>
        <p> Alredy have Account..? <a className='href' onClick={() => { navigate('/login') }}>Login</a></p>
      </div>
    </div>
  )
}

export default Signup