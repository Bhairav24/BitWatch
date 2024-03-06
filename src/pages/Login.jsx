import React, { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import BitWatchLogo from '../images/BitWatchLogo.png'
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const location = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch('http://ec2-43-204-233-148.ap-south-1.compute.amazonaws.com:5000/admin/loginAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Handle successful login, e.g., store authentication token
        console.log('Login successful:', data);
        localStorage.setItem("authToken", data.payload.token)
        localStorage.setItem("authName",data.payload.account.name)
        localStorage.setItem("authImage",data.payload.account.image)
        location('/dashboard');
        toast.success("Admin Successfully Logged In!")
      } else {
        // Handle login failure, e.g., show error message
        console.error('Login failed');
        toast.error("Error in Log in")
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center ">
      <div className="bg-black p-8 rounded shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          {/* Your logo goes here */}
          <img
            src={BitWatchLogo}
            alt="Logo"
            className="w-30 h-14 mr-2" // Adjust the width and height as needed
          />
          {/* <h2 className="text-2xl font-bold">Login</h2> */}
        </div>
        <form>
         <h1 className='bg-gradient-to-r from-customPink to-customBlue text-transparent bg-clip-text text-4xl mb-6 text-center font-extrabold'>Welcome</h1>
            
            <input
              type="email"
              placeholder='Enter Email Address'
              className="border-white rounded p-2 w-full mb-4 bg-black text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          
         
            <input
              type="password"
              className="border rounded p-2 w-full mb-4 bg-black text-white"
              value={password}
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          
          <button 
            type="button"
            className="bg-customBlue text-white p-2 rounded w-full mt-2 "
            onClick={handleLogin}
          >
            Log in
          
</button>
{/* <Link to="/signup">
<button  className=" bg-white text-customBlue p-2 rounded w-full mt-2">

            Create Account
        
</button>
</Link>   */}

        </form>
      </div>
    </div>
  );
};

export default Login;
