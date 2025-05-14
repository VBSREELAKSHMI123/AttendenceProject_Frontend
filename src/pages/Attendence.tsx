import React, { useState } from 'react'
import { privateRequest } from '../apis/requsetMethods'
import { data } from 'react-router-dom'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

const Attendence = () => {
  const [checkIn, setcheckIn] = useState(false)
  const {user} = useSelector((state:any)=>state.loginState)
  const role = user.role

  const handleAttendence = async () => {
    try {
      const today = dayjs().format("YYYY-MM-DD")
      const lastCheckIn = localStorage.getItem("lastCheckIn")
  
      if (!checkIn && lastCheckIn === today) {
        alert("You have already checked in today!");
        return;
      }
      const data = checkIn ? { timeout: true } : { timeout: null }
      const response = await privateRequest.post(`/api/attendence/addattendence`, data)
      console.log("Response:", response.data);
      if (response.data.success) {
        setcheckIn(!checkIn)
        if (!checkIn) {
          localStorage.setItem("lastCheckIn", today);
          alert("Check-In Successful ");
        } else {
          alert("Check-Out Successful ");
        }
      } else {
        alert("Attendence Marking Failed")
      }
    } catch (error) {
      console.error("Error marking attendance:", error)
      alert("Error recording attendance")
    }
  }

  return (
<div>
      {role === 'user' && (
        <button
          className='bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50'
          onClick={handleAttendence}
        >
          {checkIn ? "Checkout" : "Checkin"}
        </button>
      )}
    </div>
  )
}

export default Attendence