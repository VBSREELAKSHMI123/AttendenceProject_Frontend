import React, { useEffect, useState } from 'react'
import { privateRequest } from '../../../apis/requsetMethods'
import { data, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userState } from '../../../components/Redux/store'

const AttendenceDetails = () => {
    const { user } = useSelector(userState)
    const [isattendence,setIsAttendence] = useState(String)
    const {id} = useParams()

    const fetchAttendance = async () =>{
         try {
            const response = await privateRequest.get('/api/attendence/viewonlyAttendence/${user.user_id}')
            if (response.data) {
                console.log(response.data,"response")
                setIsAttendence(response.data.attendence)
            }
         } catch (error) {
            console.error("Error in Displaying Attendance", error);
         }
    }

    useEffect(()=>{
        fetchAttendance()
    },[id])

  return (
    <div>AttendenceDetails</div>
  )
}

export default AttendenceDetails