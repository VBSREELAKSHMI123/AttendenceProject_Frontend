import React, { useState } from 'react'
import { privateRequest } from '../apis/requsetMethods'
import { data } from 'react-router-dom'

const Attendence = () => {
const [checkIn,setcheckIn]=useState(false)

const handleAttendence = async (id: any) =>{
  try{
    const data = checkIn ? {timeout:true} : {timeout:null}
  const response = await privateRequest.post(`/addattendence/${id}`,data)
  console.log("Response:", response.data);
  if (response.data.success) {
    setcheckIn(!checkIn)
    alert("Attendence Added Successfully")
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
        <button
          className=' bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50' onClick={handleAttendence}>
          {checkIn? "Checkout" : "Checkin"}
        </button>
    </div>
  )
}

export default Attendence