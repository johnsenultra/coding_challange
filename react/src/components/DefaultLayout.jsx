import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";

export default function DefaultLayout() {
   const { user, token, setToken, setUser } = useStateContext();
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   if(!token) {
      return <Navigate to="/login" />
   }
   // Sidebar function to toggle the sidebar
   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   }
   
   // Function to handle navigation click
   const handleNavClick = () => {
      // Only close the sidebar if its on mobile view
      if(window.innerWidth < 640) {
         setIsSidebarOpen(false);
      }
   }

   // Fiunction to handle logout
   const handleLogout = () => {
      setUser({});
      setToken(null);
   }

   return (
      <div>
         {/* Hamburger Button */}
         <button
            onClick={toggleSidebar}
            type="button" 
            className="inline-flex items-center ms-1.5 p-2 mt-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600 "
            >
                  
               <span className="sr-only">Open Sidebar</span>
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
               <path clipRule="evenodd" fillRule="evenodd" d="M3 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
         </button>

         {/* Sidebar */}
         <aside 
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
               isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } sm:translate-x-0`}
         >
            <div className="h-full px-3 py-4 overflow-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <Link onClick={handleNavClick} to="/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ms-3">Dashboard</span>
                     </Link>
                  </li>
                  <li>
                     <Link onClick={handleNavClick} to="/users" className="flex p-2 text-gray-900 rounded-lg itemt-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                        <span className="ms-3">Users</span>
                     </Link>
                  </li>
                  <li>
                     <Link onClick={handleLogout} className="flex p-2 text-gray-900 rounded-lg itemt-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.0rg/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                           <path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path>
                        </svg>
                        <span className="ms-3">Logout</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </aside>

         {/* Main Content */}
         <div className="p-4 sm:ml-65">
            <Outlet />
         </div>
      </div>
   )
}
