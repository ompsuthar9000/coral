import React, { useState } from 'react'
import "./Login.scss"
import { useNavigate } from "react-router-dom"
import bcrypt from 'bcryptjs';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Retrieve hashed password from localStorage
            const hashedPassword = JSON.parse(localStorage.getItem(email));
            
            // Compare the provided password with the hashed password using bcrypt
            const passwordMatch = await bcrypt.compare(password, hashedPassword.password);

            if (passwordMatch) {
                // Generate random token
                const token = Math.random().toString(36).substr(2);

                // Store token in localStorage
                localStorage.setItem('token', token);
                 setErrorMessage('')  
                // Redirect or perform any other action for successful login
                console.log('Login successful. Token:', token);
                navigate('/')
            } else {
                // Display error message
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            console.error('Error while comparing passwords:', error);
        }
    };

    return (


        <div className='Login_main'>
            <div className='Login_form'>
                <form onSubmit={handleSubmit}>
                    <h1 className='title'>Login</h1>
                    <div className='username'>
                        <input placeholder='UserName' type='email' id='UserName' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='password'>

                        <input placeholder='Password' type='password' id='Password' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <p>{errorMessage}</p>

                <p> Dont have Account..? <a className='href' onClick={() => { navigate('/signup') }}>SignUp</a></p>
            </div>
        </div>
    )
}

export default Login