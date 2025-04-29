import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { user } = useSelector((state: any) => state.loginState)
  return (
    <div className="flex flex-col h-screen py-10">
      <div className="h-[150px]">
      
        <div className="flex flex-row items-center">
        
          <Avatar
            src={'/default-avatar.png'} 
            variant="square"
            sx={{ width: 80, height: 80 }}
          />

       
          <div className="ml-4">
            <div>{user.fname}</div>
            <div>{user.designation}</div>
            <div>{user.email}</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        
      </div>
    </div>
  )
}

export default Profile
