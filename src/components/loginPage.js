import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate()

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if(token){
  //     navigate('/homepage')
  //   }
  //   else{
  //     alert('Token is not there')
  //   }
  // },[])

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit = async () => {
       try {
        const data = await fetch(`http://localhost:8000/login?email=${formData.email}&password=${formData.password}`);
        const res = await data.json()
        localStorage.setItem('token',res.token)
        navigate('/homepage')
       } catch (error) {
        console.log(error)
       }
    }
  return (
    <div>
      <h1>This is from LoginPage</h1>
      <input type='text' placeholder='Enter Email' onChange={(e) => handleChange(e)} value={formData.email} name='email'/>
      <input type='password' placeholder='Enter Password' onChange={(e) => handleChange(e)} value={formData.password} name='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LoginPage
