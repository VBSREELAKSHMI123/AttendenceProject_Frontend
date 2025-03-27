import React, { useEffect } from 'react'
import SideMenu from '../../components/SideMenu'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import { privateRequest } from '../../apis/requsetMethods'

const UserDashboard = () => {

  // const fetchUserList = async () => {
  //   try {
  //     const response = await privateRequest.get("/userview")
  //     console.log(response)
  //   } catch (error) {
  //     console.error("error", error);
  //   }

  // }
  // useEffect(() => {
  //   fetchUserList()
  // }, [])

  return (
    <div className=' flex w-full h-screen '>
      <SideMenu />
      <div className=' ml-[232px] flex-1 my-4  rounded-lg '>
        <Navbar children='Hello New User 👋🏻' />
        <div className='px-2 pt-4 w-[calc(100%-32px)]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default UserDashboard