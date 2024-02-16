// user.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import Datepicker from '../../components/Datepicker';
import EditMenu from '../../components/DropdownEditMenu';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import AddScreen from './AddScreen';

const StartScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState(null);
//const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2QwMjVhZDVmMDE2MWMyZTkxMjJkMiIsImVtYWlsIjoibEBnbWFpbC5jb20iLCJpYXQiOjE3MDc5OTc4OTh9.5Ia-kfWTJMlTRI-bwwAY4ImSUE2x1y3fmZfhENwLzWE"; // Replace with your actual access token
const accessToken=localStorage.getItem('authToken');
  const fetchDataFromApi = async () => {
    try {
      
      const result = await axios.get("http://ec2-43-204-233-148.ap-south-1.compute.amazonaws.com:5000/admin/getAllSliderImages");
      setData(result.data.sliderImages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleEdit = (userId) => {
  //   const userToEdit = data.find((user) => user._id === userId);
  //   setSelectedUserForEdit(userToEdit);
  //   setIsEditModalOpen(true);
  // };

  // const handleDelete = async (userId) => {
  //   try {
  //     const result = await axios.post(
  //       "http://ec2-13-233-152-110.ap-south-1.compute.amazonaws.com:5000/admin/deleteUserByAdmin",
  //       {
  //         userID: userId,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     console.log(result);
  //     fetchDataFromApi();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleBlock = async (userId, isBlocked) => {
  //   try {
  //     const result = await axios.post(
  //       "http://ec2-13-233-152-110.ap-south-1.compute.amazonaws.com:5000/admin/block",
  //       {
  //         userType: "User",
  //         _id: userId,
  //         block: !isBlocked,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     console.log(result);
  //     fetchDataFromApi();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                
                <button
                  className="btn bg-blue-500 hover:bg-indigo-600 text-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add New Screen</span>
                </button>
              </div>
            </div>

            <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="text-slate-800 text-3xl font-bold bg-gradient-to-r from-customPink to-customBlue text-transparent bg-clip-text">All Splash Screens</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full dark:text-slate-300">
                    <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                      <tr>
                        <th className="p-2">
                          <div className="font-semibold text-left text-white">Image</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center text-white">Name</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center text-white">Heading</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center text-white">Description</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center text-white">Actions</div>
                        </th>
                      
                      
                      </tr>
                    </thead>
                    <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                      {data.map((user, index) => (
                        <tr key={index}>
                          <td className="p-2">
                            <div className="flex items-center">
                              <img className="text-slate-800 dark:text-slate-100 w-12 h-12 rounded" src={user.image}></img>
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">{user.name}</div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">{user.heading}</div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">{user.description}</div>
                          </td>
                          
                      
                          <td className="p-2" align="center">
                            <EditMenu align="right" className="relative inline-flex">
                              {/* <li>
                                <Link
                                  onClick={() => handleBlock(user._id, user.block)}
                                  className={`font-medium text-sm ${user.block ? 'text-green-500' : 'text-red-500'} hover:text-rose-600 flex py-1 px-3`}
                                  to="#0"
                                >
                                  {user.block ? 'Unblock' : 'Block'}
                                </Link>
                              </li>
                              <li>
                                <Link onClick={() => handleEdit(user._id)} className="font-medium text-sm text-indigo-600 hover:text-rose-600 flex py-1 px-3" to="#0">
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link onClick={() => handleDelete(user._id)} className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">
                                  Delete
                                </Link>
                              </li> */}
                            </EditMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add User modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <AddScreen closeModal={() => setIsModalOpen(false)} fetchDataFromApi={fetchDataFromApi} accessToken={accessToken} />
        </div>
      )}

      {/* Edit User modal */}
      {/* {isEditModalOpen && selectedUserForEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <EditUserForm
            userData={selectedUserForEdit}
            closeModal={() => setIsEditModalOpen(false)}
            fetchDataFromApi={fetchDataFromApi}
            accessToken={accessToken}
          />
        </div>
      )} */}
    </div>
  );
};

export default StartScreen;
