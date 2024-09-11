import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     try {
  //       const decodedToken = jwtDecode(token);
  //       const currentTime = Date.now() / 1000; // Current time in seconds
  //       const tokenExpirationTime = decodedToken.exp;

  //       if (tokenExpirationTime < currentTime) {
  //         console.log('Token has expired, logging out.');
  //         handleSignOut(); // Log the user out
  //       } else {
  //         console.log('Token is valid');
  //         const timeToExpire = (tokenExpirationTime - currentTime) * 1000;
  //         console.log(timeToExpire)
  //         setTimeout(() => {
  //           handleSignOut(); // Auto log out when token expires
  //         }, timeToExpire);
  //       }
  //     } catch (error) {
  //       console.error('Invalid token:', error);
  //       handleSignOut(); // Log out if the token is invalid
  //     }
  //   } else {
  //     window.location.href = '/';
  //   }
  // }, []);

  const handleSignOut = () => {
    navigate('/products')
  }

  return (
    <div>
      <h1>Welcome {email}</h1>
      <button onClick={() => handleSignOut()}>All Products</button>
    </div>
  )
}

export default HomePage
