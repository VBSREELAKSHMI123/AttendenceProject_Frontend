import React from 'react'
import SideBar from './SideMenu'
import SideMenu from './SideMenu'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className=' flex w-full h-full'>
   <div className='w-full h-screen flex m-5'>
     <SideMenu />
     <div className='flex-1 m-4 rounded-lg'>
      <Navbar children='Hello New User 👋🏻'/>
      <Outlet />
     </div>
   </div>
   </div>
  )
}
export default DashboardLayout