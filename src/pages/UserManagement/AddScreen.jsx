// AddUserForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddScreen = ({ closeModal, fetchDataFromApi }) => {


  const accessToken=localStorage.getItem('authToken')
    const [ImagePreview,SetImagePreview]=useState(null)
  const [formData, setFormData] = useState({
    images: null,
    heading: '',
    description: '',
    name:''
   
   
  });

  const handleImageChange=(e)=>{
    const file=e.target.files[0]
    setFormData((getImage)=>({
        ...getImage,
        images:URL.createObjectURL(file)
    })  )

    SetImagePreview(URL.createObjectURL(file))
   
  
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Add this line to log the form data

    try {
      const result = await axios.post(
        'http://ec2-43-204-233-148.ap-south-1.compute.amazonaws.com:5000/admin/uploadSliderImage',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(result);
      fetchDataFromApi();
      closeModal();
      toast.success('Information added successfully!')
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
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
          <h2 className="text-xl font-bold bg-gradient-to-r from-customPink to-customBlue text-transparent bg-clip-text mb-4">Add Start Screen</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
                Image
              </label>

              {
                ImagePreview&&
                
                <img src={ImagePreview} className='h-20 w-15' alt='selected'/>
              }
              <input
                type="file"
               
                name="images"
              
                onChange={handleImageChange}
               
                required
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md w-full py-2 px-3 mb-2"
                required
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="heading">
               Heading
              </label>
              <input
                type="text"
                id="heading"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                className="border rounded-md w-full py-2 px-3 mb-2 "
                required
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="description">
              Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border rounded-md w-full py-2 px-3 mb-6"
                required
              />
            </div>
           
          
            {/* Add other input fields similarly */}

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
