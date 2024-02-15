
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import BitWatchLogo from '../images/BitWatchLogo.png';
// import {toast} from 'react-toastify'
// import axios from 'axios';

// export default function Signup() {

 

//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone_number: "",
//    age:"",
//    gender:"",
//    city:"",
//     images: null,
   
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//               console.log(credentials)
//               const formData = new FormData();
//               formData.append('name', credentials.name);
//               formData.append('email', credentials.email);
//               formData.append('password', credentials.password);
//               formData.append('phone_number', credentials.phone_number);
//               formData.append('age', credentials.age);
//               formData.append('gender', credentials.gender);
//               formData.append('city', credentials.city);
//               formData.append('images', credentials.images);
              
        
//         const req = await fetch('http://ec2-43-204-233-148.ap-south-1.compute.amazonaws.com:5000/admin/registerAdmin', {
//           method: 'POST',
//           body: formData,
//           headers: {
//             'Accept': 'application/json',
//           },
//         });

//         if (req.ok) {
//           const response = await req.json();
//           console.log(response);
//           if (response && response.payload && response.payload.image) {
//             console.log(response.payload)
//             localStorage.setItem("authToken", response.payload.token)
//             localStorage.setItem("authName",response.payload.name)
//             localStorage.setItem("authImage",response.payload.image)
//             navigate('/dashboard');
//             toast.success('BitWatch Admin Created Successfully!')
//           } else {
//             toast.error('Failed to create BitWatch admin');
//           }
//         } else {
//           toast.error('Failed to fetch response');
//         }
//     //  }
//     } catch (error) {
//       console.error('Error in handle:', error);
//       toast.error('Please ensure that your email and phone no is unique');
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

 
//   function handleImage(e) {
//     const  file = e.target.files[0];
//     setCredentials({
//       ...credentials,
//       images: URL.createObjectURL(file)
//        // Store the URL of the uploaded image
//     });
   
//   }
 

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-black p-8 rounded shadow-md w-full max-w-md">
//         <div className="flex items-center justify-center mb-4">
//           <img
//             src={BitWatchLogo}
//             alt="Logo"
//             className="w-30 h-14 mr-2"
//           />
//         </div>

//        <h1 className='bg-gradient-to-r from-customPink to-customBlue text-transparent bg-clip-text text-4xl mb-6 text-center font-extrabold'>Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//         <label className="mb-5 text-white">Upload Image</label>

//             <input
//               type="file"
//               name="images"
//               className=" w-15 h-15 rounded-full mb-4 mt-1 bg-black flex justify-center "
//               onChange={handleImage}
//               required
//             /> 
           
          
//            <label className="mb-5 text-white">Name</label>
//           <input
//           placeholder='Enter your name'
//             type="text"
//             className="border p-2 w-full mb-4 bg-black text-white rounded"
//             name="name"
//             value={credentials.name}
//             onChange={onChange}
//             required
//           />
//         <label className="mb-5 text-white">Email</label>
//           <input
//           placeholder='Enter email address'
//             type="email"
//             className="border p-2 w-full mb-4 bg-black text-white rounded"
//             name="email"
//             value={credentials.email}
//             onChange={onChange}
//             required
//           />



          




//           <label className="mb-5 text-white">Phone</label>
//           <input
//           placeholder='Your contact number'
//             type="text"
//             className="border p-2 w-full mb-4 bg-black text-white rounded"
//             name="phone_number"
//             value={credentials.phone_number}
//             onChange={onChange}
//             required
//           />
//          <label className="mb-5 text-white">Age</label>
//           <input
//           placeholder='Your Age'
//             type="age"
//             className="border p-2 w-full mb-4 bg-black text-white rounded"
//             name="age"
//             value={credentials.age}
//             onChange={onChange}
//             required
//           /> 

//           <label className="mb-5 text-white">Gender</label>
//           <select
//             onChange={onChange}
//             className="border p-1 w-full mb-4 bg-black text-white rounded"
//             name="gender"
//             value={credentials.gender}
//             required
//           >
//             <option value="" disabled>Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
 


          
            
        
// {/* <label className="mb-2">
//   <span className="block text-center border border-gray-300 py-2 px-4 bg-white rounded cursor-pointer">
//     Upload Image
//     <input
//       type="file"
//       name="images"
//       className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
//       onChange={handleImage}
//     />
//   </span>
// </label> */}

// <label className="mb-1 text-white">City</label>
//           <input
//           placeholder='Your city'
//             type="text"
//             className="border p-2 w-full mb-4 bg-black text-white rounded"
//             name="city"
//             value={credentials.city}
//             onChange={onChange}
//           />


//          <label className="mb-4 text-white">Password</label>
//           <input
//           placeholder='Enter password'
//             type="password"
//             className="border p-2 w-full mb-4 bg-black text-white rounded"
//             name="password"
//             value={credentials.password}
//             onChange={onChange}
//           />
//           <div className="d-grid ">
//             <button type="submit" className='bg-customBlue text-white p-2 rounded w-24 mt-2 '>
//               Submit
//             </button>
           
//           </div>
//           <p className="forgot-password text-center mt-6">
//             Already have an account? <Link to="/" className='text-customBlue'> Log in</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BitWatchLogo from '../images/BitWatchLogo.png';
import {toast} from 'react-toastify'

export default function SignUp() {
 
  
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    age: "",
    gender: "",
    city: "",
    images: null,
    imageUrl:""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
        const formData = new FormData();
        formData.append('name', credentials.name);
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);
        formData.append('phone_number', credentials.phone_number);
        formData.append('age', credentials.age);
        formData.append('gender', credentials.gender);
        formData.append('city', credentials.city);
        formData.append('images', credentials.images);
        
        const req = await fetch('http://ec2-43-204-233-148.ap-south-1.compute.amazonaws.com:5000/admin/registerAdmin', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
          },
        });

        if (req.ok) {
          const response = await req.json();
          console.log(response);
          if (response && response.payload && response.payload.image) {
            console.log(response.payload)
            localStorage.setItem("authToken", response.payload.token)
            localStorage.setItem("authName",response.payload.name)
            localStorage.setItem("authImage",response.payload.image)
            navigate('/dashboard');
            toast.success('Admin Created Successfully!')
          } else {
            toast.error('Failed to create admin');
          }
        } else {
          toast.error('Failed to fetch response');
        }
    //  }
    } catch (error) {
      console.error('Error in handle:', error);
      toast.error('Please ensure that your email and phone no is unique');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  function handleImage(e) {
    const file = e.target.files[0];
    setCredentials({
      ...credentials,
      images: file,
      imageUrl: URL.createObjectURL(file) // Store the URL of the uploaded image
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src={BitWatchLogo}
            alt="Logo"
            className="w-30 h-14 mr-2"
          />
        </div>
        <form onSubmit={handleSubmit}>
          {/* <div className="flex items-center mb-4">
            <span className="mr-4">Sign in as</span>
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}
              />
              <span className="ml-2">User</span>
            </label>
            <label className="flex items-center ml-4">
              <input
                type="radio"
                name="userType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
              />
              <span className="ml-2">Admin</span>
            </label>
          </div>
          {userType === "Admin" && (
            <label className="block mb-4">
              <label>Secret Key</label>
              <input
                type="text"
                className="border p-2 w-full"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </label>
          )} */}
          <label>Name</label>
          <input
            type="text"
            className="border p-2 w-full mb-4 bg-black text-white rounded"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
          <label>Email address</label>
          <input
            type="email"
            className="border p-2 w-full mb-4 bg-black text-white rounded"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <label>Phone</label>
          <input
            type="text"
            className="border p-2 w-full mb-4 bg-black text-white rounded"
            name="phone_number"
            value={credentials.phone_number}
            onChange={onChange}
          />
          <label>Age</label>
          <input
            type="number"
            className="border p-2 w-full mb-4 bg-black text-white rounded"
            name="age"
            value={credentials.age}
            onChange={onChange}
          />
          <label>Gender</label>
          <select
            onChange={onChange}
            className="border p-2 w-full mb-4 bg-black text-white rounded"
            name="gender"
            value={credentials.gender}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>



          
            <label className="mb-5">Upload Image</label>
            <input
              type="file"
              name="images"
              className="p-0 w-full mb-4 mt-1"
              onChange={handleImage}
            />
        
{/* <label className="mb-2">
  <span className="block text-center border border-gray-300 py-2 px-4 bg-white rounded cursor-pointer">
    Upload Image
    <input
      type="file"
      name="images"
      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
      onChange={handleImage}
    />
  </span>
</label> */}


          <label>City</label>
          <input
            type="text"
            className="border p-2 w-full mb-4 bg-black text-white rounded"
            name="city"
            value={credentials.city}
            onChange={onChange}
          />
          <label>Password</label>
          <input
            type="password"
            className="border p-2 w-full mb-4 bg-black text-white rounded"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
          <div className="d-grid ">
            <button type="submit" className="btn success btn-primary">
              Sign Up
            </button>
           
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/"> Log in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}