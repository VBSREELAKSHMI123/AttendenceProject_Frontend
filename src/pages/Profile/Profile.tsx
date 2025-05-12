import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileItemView from '../../components/ProfileItemView'
import { ProfileDetails } from './ProfileDetails/ProfileDetails'

const Profile = () => {
  const { user } = useSelector((state: any) => state.loginState)

  return (
    <div className="flex flex-col h-screen py-10">
      <div className="h-[150px]">

        <div className="flex flex-row items-center mb-5">

          <Avatar
            src={'/default-avatar.png'}
            variant="square"
            sx={{ width: 80, height: 80 }}
          />


          <div className="ml-4 justify-between">
            <div>{user.fname}</div>
            <div>{user.designation}</div>
            <div>{user.email}</div>
            <div><button>test</button></div>
          </div>
        </div>

        <div className='flex gap-5 items-start'>
          <div className='flex-1'>
            test
          </div>
          <div className='flex-[4]'>
            <ProfileDetails />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
