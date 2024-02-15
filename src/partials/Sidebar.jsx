// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// // react-icon
// import { FiUsers } from "react-icons/fi";

// import { IoIosSettings } from "react-icons/io";

// import SidebarLinkGroup from './SidebarLinkGroup';
// import BitWatchLogo from '../images/BitWatchLogo.png'

// function Sidebar({ sidebarOpen, setSidebarOpen }) {
//   const location = useLocation();
//   const { pathname } = location;

//   const trigger = useRef(null);
//   const sidebar = useRef(null);

//   const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
//   const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

//   // close on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!sidebar.current || !trigger.current) return;
//       if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener('click', clickHandler);
//     return () => document.removeEventListener('click', clickHandler);
//   });

//   // close if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ keyCode }) => {
//       if (!sidebarOpen || keyCode !== 27) return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener('keydown', keyHandler);
//     return () => document.removeEventListener('keydown', keyHandler);
//   });

//   useEffect(() => {
//     localStorage.setItem('sidebar-expanded', sidebarExpanded);
//     if (sidebarExpanded) {
//       document.querySelector('body').classList.add('sidebar-expanded');
//     } else {
//       document.querySelector('body').classList.remove('sidebar-expanded');
//     }
//   }, [sidebarExpanded]);

//   return (
//     <div>
//       {/* Sidebar backdrop (mobile only) */}
//       <div
//         className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//         aria-hidden="true"
//       ></div>

//       {/* Sidebar */}
//       <div
//         id="sidebar"
//         ref={sidebar}
//         className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-00 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
//           }`}
//       >
//         {/* Sidebar header */}
//         <div className="flex justify-between mb-10 pr-3 sm:px-2">


//           {/* Close button */}
//           <button
//             ref={trigger}
//             className="lg:hidden text-slate-500 hover:text-slate-400"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             aria-controls="sidebar"
//             aria-expanded={sidebarOpen}
//           >
//             <span className="sr-only">Close sidebar</span>
//             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
//             </svg>
//           </button>
//           {/* Logo */}
//           <NavLink end to="/" className="block">
//             <img className="" src={BitWatchLogo} width="100" height="" alt="site-logo" />

//           </NavLink>
//         </div>

//         {/* Links */}
//         <div className="space-y-8">
//           {/* Pages group */}
//           <div>
//             <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
//               <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
//                 •••
//               </span>
//               <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
//             </h3>
//             <ul className="mt-3">
//               {/* Dashboard */}
//               <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('inbox') && 'bg-slate-900'}`}>
//                 <NavLink
//                   end
//                   to="/dashboard"
//                   className={`block text-rose-800 truncate transition duration-150 ${pathname.includes('inbox') ? 'hover:text-slate-200' : 'hover:text-slate-500'
//                     }`}
//                 >
//                   <div className="flex items-center">
//                   <svg className="shrink-0 h-4 w-4" viewBox="0 0 24 24">
//                               <path
//                                 className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-slate-400' : 'text-slate-100'
//                                   }`}
//                                 d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
//                               />
//                               <path
//                                 className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-rose-800' : 'text-rose-900'
//                                   }`}
//                                 d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
//                               />
//                               <path
//                                 className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-white' : 'text-white'
//                                   }`}
//                                 d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
//                               />
//                             </svg>  
//                     <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
//                   </div>
//                 </NavLink>
//               </li>
//               {/* User Management Page /  */}
//               <SidebarLinkGroup activecondition={pathname.includes('users')}>
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <a
//                         href="#0"
//                         className={`block text-rose-800 truncate transition duration-150 ${pathname.includes('users') ? 'hover:text-slate-500' : 'hover:text-slate-500'
//                           }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded ? handleClick() : setSidebarExpanded(true);
//                         }}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center">
//                           <FiUsers/>
//                             <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
//                               Users
//                             </span>
//                           </div>
//                           {/* Icon */}
//                           <div className="flex shrink-0 ml-2">
//                             <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
//                               <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
//                             </svg>
//                           </div>
//                         </div>
//                       </a>
//                       <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
//                         <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
//                           <li className="mb-1 last:mb-0">
//                             <NavLink
//                               end
//                               to="/user"
//                               className={({ isActive }) =>
//                                 'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-900')
//                               }
//                             >
//                               <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
//                                 All Users
//                               </span>
//                             </NavLink>
//                           </li>
                        
//                           {/* <li className="mb-1 last:mb-0">
//                             <NavLink
//                               end
//                               to="/activity"
//                               className={({ isActive }) =>
//                                 'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
//                               }
//                             >
//                               <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
//                                 Activity Logs
//                               </span>
//                             </NavLink>
//                           </li> */}
//                         </ul>
//                       </div>
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
             
//             </ul>
//           </div>
//           {/* More group */}
//           <div>
//             <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
//               <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
//                 •••
//               </span>
//               <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
//             </h3>
            
//             <ul className="mt-3">
//                {/* Settings */}
             
    

//             </ul>
//           </div>
//         </div>
//        {/* Expand / collapse button */}
//         <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
//           <div className="px-3 py-2">
//             <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
//               <span className="sr-only">Expand / collapse sidebar</span>
//               <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
//                 <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
//                 <path className="text-slate-600" d="M3 23H1V1h2z" />
//               </svg>
//             </button>
//           </div>
//         </div>
    
//       </div>
//     </div>
//   );
// }

// export default Sidebar;




import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiUsers } from "react-icons/fi";
import SidebarLinkGroup from './SidebarLinkGroup';
import BitWatchLogo from '../images/BitWatchLogo.png';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === 'true');

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.body.classList.add('sidebar-expanded');
    } else {
      document.body.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>
      
      {/* Sidebar */}
      <div id="sidebar" ref={sidebar} className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 bg-slate-00 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button ref={trigger} className="lg:hidden text-slate-500 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}>
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <img src={BitWatchLogo} alt="site-logo" width="100" />
          </NavLink>
        </div>
        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('inbox') && 'bg-slate-900'}`}>
                <NavLink end to="/dashboard" className={`block text-white truncate transition duration-150 ${pathname.includes('inbox') ? 'hover:text-slate-200' : 'hover:text-slate-500'}`}>
                  <div className="flex items-center">
                    <FiUsers className="shrink-0 h-4 w-4 fill-current" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                  </div>
                </NavLink>
              </li>
              {/* User Management Page */}
              <SidebarLinkGroup activecondition={pathname.includes('users')}>
                {(handleClick, open) => (
                  <>
                    <a href="#0" className={`block text-rose-800 truncate transition duration-150 ${pathname.includes('users') ? 'hover:text-slate-500' : 'hover:text-slate-500'}`} onClick={(e) => {
                      e.preventDefault();
                      sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                    }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FiUsers color='white' />
                          <span className="text-sm text-white font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Contents</span>
                        </div>
                        {/* Icon */}
                        <div className="flex shrink-0 ml-2">
                          <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                        <li className="mb-1 last:mb-0">
                          <NavLink end to="/user" className={({ isActive }) => 'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-900')}>
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">All Users</span>
                          </NavLink>
                        </li>

                        <li className="mb-1 last:mb-0">
                          <NavLink end to="/startscreen" className={({ isActive }) => 'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-900')}>
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Start Screen</span>
                          </NavLink>
                        </li>
                        {/* Other links */}
                      </ul>
                    </div>
                  </>
                )}
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
            </h3>
            <ul className="mt-3">
              {/* Other links */}
            </ul>
          </div>
        </div>
        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
