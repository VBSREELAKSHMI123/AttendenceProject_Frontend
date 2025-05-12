import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'

type NavType = {
  children: string
}

const Navbar = ({ children }: NavType) => {
  const navigate = useNavigate()

  
  const { user } = useSelector((state: any) => state.loginState)

  const handleProfileClick = () => {
    navigate('/dash/profile')  
  }

  return (
    <div className='w-[calc(100%-32px)] h-[60px] border border-gray-200 rounded-md justify-between items-center px-4 flex bg-gray-100 sticky top-4 z-10'>
      <div className="text-xl font-semibold">{children}</div>

      <div className="flex items-center gap-3 cursor-pointer " onClick={handleProfileClick}>
        <Avatar
          src={user?.profileImage || '/default-avatar.png'} 
          alt={user?.fname}
        />
        <div className="text-sm text-gray-700 text-right">
          <div className="font-medium">{user?.fname || 'User'}</div>
          <div className="text-xs text-gray-500">{user?.role || ''}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
