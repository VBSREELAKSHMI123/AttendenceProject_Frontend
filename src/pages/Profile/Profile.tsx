import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileItemView from '../../components/ProfileItemView'
import { ProfileDetails } from './ProfileDetails/ProfileDetails'
import { CalendarCheck, ClipboardText, User } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import AttendenceDetails from './AttendenceDetails/AttendenceDetails'
import AllLeaves from '../AllLeaves'
import Leaves from '../Leaves'

const Profile = () => {
  const { user } = useSelector((state: any) => state.loginState)
  const [active,setActive] = useState('profile')

  return (
    <div className="flex flex-col h-screen py-10">
      <div className="h-[150px]">

        <div className="flex flex-row items-center mb-5">
          <Avatar
            src={'/default-avatar.png'}
            variant="square"
            sx={{ width: 80, height: 80 }}
          />


          <div className="ml-4">
            <div>{user.fname}</div>
            <div>{user.designation}</div>
            <div >{user.email}</div>
          </div>
        </div>

        <div className='flex gap-5 items-start'>
          <div className='flex-1 border rounded-lg border-gray-200 p-2 cursor-pointer'>
          <p onClick={()=>setActive('profile')} className={`p-2 flex items-center gap-2 space-x-4' ${active==='profile' ? 'bg-blue-500 text-white border rounded-lg' : 'text-black'}`}>
          <span><User size={20} /></span>Profile</p>
          <p onClick={()=>setActive('attendence')} className={`p-2 flex items-center gap-2 space-x-4' ${active==='attendence' ? 'bg-blue-500 text-white border rounded-lg' : 'text-black'}`}>
          <span><CalendarCheck size={20} /></span>Attendence</p>
          <p onClick={()=>setActive('leave')} className={`p-2 flex items-center gap-2 space-x-4' ${active==='leave' ? 'bg-blue-500 text-white border rounded-lg' : 'text-black'}`}>
          <span><ClipboardText size={20} /></span>Leave Days</p>
          </div>
          <div className='flex-[4]'>
            {active === 'profile' && <ProfileDetails/>}
            {active === 'attendence' && <AttendenceDetails/>}
            {active === 'leave' && <Leaves/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
