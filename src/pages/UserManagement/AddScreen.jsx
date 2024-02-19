// // AddUserForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AddScreen = ({ closeModal, fetchDataFromApi,accessToken}) => {


//   //  const [ImagePreview,SetImagePreview]=useState(null)
//   const [screenData, setScreenData] = useState({
//     name:'',
//     images:null,
//     heading:'',
//     description:''
//   });


   
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setScreenData(prevFormData => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange=(e)=>{
//     const file=e.target.files[0]
//     setScreenData(prevFormData=>({
//         ...prevFormData,
//         images:URL.createObjectURL(file)
//     }));
//   }
//   //  SetImagePreview(URL.createObjectURL(file))

 

// const handleScreenSubmit = async (e) => {
//   e.preventDefault();
//   console.log("handleSubmit called");
//   console.log(screenData); // Log the form data
  
//   try {
//     const formData = new FormData();
//     formData.append('name', screenData.name);
//     formData.append('heading', screenData.heading);
//     formData.append('description', screenData.description);
//     formData.append('images', screenData.images);



//     const response = await axios.post(
//       'http://ec2-43-204-233-148.ap-south-1.compute.amazonaws.com:5000/admin/uploadSliderImage',
//       formData, // Assuming screenData contains the form data
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     console.log(response.data); // Log the response data
//     fetchDataFromApi();
//     closeModal();
//     toast.success(response.data.message)
//   } catch (error) {
//     console.log(error);
//     toast.error(response.data.message)
//   }
// };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="p-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm">
//         <div className="flex justify-end">
//           <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="p-4 modal-content">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-customPink to-customBlue text-transparent bg-clip-text mb-4">Add Splash Screen</h2>
//           <form onSubmit={handleScreenSubmit}>
//             <div className="mb-1">
//               <label className="block text-white text-sm font-bold mb-1" >
//                 Image
//               </label>

//               {/* {
//                 ImagePreview&&
                
//                 <img src={ImagePreview} className='h-20 w-15' alt='selected'/>
//               } */}
//               <input
//                 type="file"
               
//                 name="images"
//               className='mb-2'
//                 onChange={handleImageChange}
               
//                 required
//               />
//             </div>
//             <div className="mb-1">
//               <label className="block text-white text-sm font-bold " >
//                 Name
//               </label>
//               <input
//                 type="text"
             
//                 name="name"
//                 value={screenData.name}
//                 onChange={handleChange}
//                 className="border dark:bg-slate-800 rounded-md w-full py-2 px-3 mb-2"
//                 required
//               />
//             </div>
//             <div className="mb-1">
//               <label className="block text-white text-sm font-bold " >
//                Heading
//               </label>
//               <input
//                 type="text"
             
//                 name="heading"
//                 value={screenData.heading}
//                 onChange={handleChange}
//                 className="border dark:bg-slate-800 rounded-md w-full py-2 px-3 mb-2 "
//                 required
//               />
//             </div>
//             <div className="mb-1">
//               <label className="block dark:bg-slate-800 text-white text-sm font-bold ">
//               Description
//               </label>
//               <input
//                 type="text"
               
//                 name="description"
//                 value={screenData.description}
//                 onChange={handleChange}
//                 className="border dark:bg-slate-800 rounded-md w-full py-2 px-3 mb-6"
//                 required
//               />
//             </div>
           
          
//             {/* Add other input fields similarly */}

//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddScreen;

import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'

const AddScreen = ({ closeModal, fetchDataFromApi, accessToken }) => {


  const [preview,setPreview]=useState(null);
  const [screenData, setScreenData] = useState({
    name: '',
    images: null,
    heading: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScreenData(prevScreenData => ({
      ...prevScreenData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setScreenData(prevScreenData => ({
      ...prevScreenData,
      images: file
    }));
    setPreview(URL.createObjectURL(file))
  };

  const handleScreenSubmit = async (e) => {
    e.preventDefault();
    
    console.log(screenData); // Log the form data

    try {
      const formData = new FormData();
      formData.append('name', screenData.name);
      formData.append('heading', screenData.heading);
      formData.append('description', screenData.description);
      formData.append('images', screenData.images);

      const response = await axios.post(
        'http://ec2-43-204-233-148.ap-south-1.compute.amazonaws.com:5000/admin/uploadSliderImage',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      console.log(response.data); // Log the response data
      fetchDataFromApi();
      closeModal();
      toast.success(response.data.message)
    } catch (error) {
      console.error('Error:', error);
      toast.error(error)
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="p-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm">
        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 modal-content">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-customPink to-customBlue text-transparent bg-clip-text mb-4">Add Splash Screen</h2>
          <form onSubmit={handleScreenSubmit}>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-1">Image</label>
              {preview&& <img src={preview} className='h-20 w-20 rounded-full mx-auto' alt="Image Preview"></img>}
              <input
                type="file"
                name="images"
                className="mb-2"
                onChange={handleImageChange}
                required
              />
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold">Name</label>
              <input
                type="text"
                name="name"
                value={screenData.name}
                onChange={handleChange}
                className="border dark:bg-slate-800 rounded-md w-full py-2 px-3 mb-2"
                required
              />
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold">Heading</label>
              <input
                type="text"
                name="heading"
                value={screenData.heading}
                onChange={handleChange}
                className="border dark:bg-slate-800 rounded-md w-full py-2 px-3 mb-2"
                required
              />
            </div>
            <div className="mb-1">
              <label className="block dark:bg-slate-800 text-white text-sm font-bold">Description</label>
              <input
                type="text"
                name="description"
                value={screenData.description}
                onChange={handleChange}
                className="border dark:bg-slate-800 rounded-md w-full py-2 px-3 mb-6"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddScreen;
