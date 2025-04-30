import React, { ReactHTMLElement, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { privateRequest } from '../apis/requsetMethods';
import { InputField } from '../components/FormElemets/InputField';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


type LeaveType = {
  _id: string;
  employee: any;
  id(id: any): void;
  date:string,
  description:string,
  status:string,
  user_id:string
  
}



const Leaves = () => {

  const user_name = localStorage.getItem("user_name");
  const { user } = useSelector((state: any) => state.loginState) 
 const [leaves,setLeave]=useState<LeaveType[]>([])
 const [isapproved,setisApproved]=useState<boolean>(false)
 const role = useSelector((state: any) => state.loginState.user?.role)
 const [dateRange,setDateRange] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null]>([null, null])
 const [fileteredLeave,setFilteredLeave] = useState<LeaveType[]>([])
 const [data,setData]=useState({
  date:"",
  description:""
 })
 const id = user.user_id
 const [isopen,setisOpen]=useState<boolean>(false)
  const closeModal = () => {
    setData({ date: "", description: "" }); 
    setisOpen(false);
  };


  const handleVerifyLeave = async (id: any) =>{
       const approve = window.confirm("Are you sure to approve the leave ?")
       if (approve) {
          try {
            const response = await privateRequest.patch(`/api/leave/verifyleave/${id}`,{status:"approved"})
            if (response.data.success) {
              alert("Leave approved successfully");
              fetchLeave()
            }
          } catch (error) {
            console.error("Approval error:", error);
          }
       }
  }

      const addLeave = async () =>{
      try{
           const response = await privateRequest.post(`/api/leave/addleave/${id}`,data)
           if (response.data.success) {
            alert("Leave Request Successfull")
            fetchLeave()
             closeModal()
           }
      }catch(error)  {
        console.error("Error in Requesting Leave:", error);
      }
    }


  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setData({...data,[e.target.name]: e.target.value})
      }

        const fetchLeave = async () =>{
         try{
          const response = role === "user"
          ? await privateRequest.get(`/api/leave/viewempleave/${id}`)
          : await privateRequest.get(`/api/leave/viewleave`);
    
               setLeave(response.data)
         }
          catch(error)  {
            console.error("Error Displaying Leave:", error);
          }
        }
      
        useEffect(()=>{
          fetchLeave()
        },[id])

        useEffect(()=>{
         if (dateRange[0] && dateRange[1]) {
          const start = dateRange[0].startOf('day')
          const end = dateRange[1].endOf('day')
          const filterLeave = fileteredLeave.filter((leave)=>{
          const  leaveDate = dayjs(leave.date)
          console.log("Leave Date:", leave.date);
          return leaveDate.isAfter(start.subtract(1,'day')) && leaveDate.isBefore(end.add(1,'day'))
          })

          setFilteredLeave(filterLeave)
         } else {
          setFilteredLeave(leaves)
         }
        },[dateRange,leaves])

    //  const handleVerify = async () =>{
    //      const response = await privateRequest.patch(`/verifyleave/${id}`,{status:"approved"})
    //      if (response.data.success) {
    //         setisApproved(true)
    //      } 
    //  }

  return (
    <div className="p-4">
    <div className="flex justify-end mb-4">
     {role==="user" ? <button className="bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50" onClick={()=>setisOpen(true)}>Apply Leave</button>:
     <LocalizationProvider 
     dateAdapter={AdapterDayjs}>
  <DemoContainer components={['DateRangePicker']}>
    <DateRangePicker
      value={dateRange}
      onChange={(newValue) => {
        setDateRange(newValue);
      }}
    />
  </DemoContainer>
</LocalizationProvider>}
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {fileteredLeave.map((leave) => (
    <TableRow key={leave._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">{leave.employee.fname}</TableCell>
      <TableCell align="left">{dayjs(leave.date).format("D MMMM YYYY")}</TableCell>
      <TableCell align="left">{leave.description}</TableCell>
      <TableCell align="left">
        {role === "admin" && leave.status === "pending" ? (
          <button className='text-blue-600 underline' onClick={() => handleVerifyLeave(leave._id)}>
            {leave.status}
          </button>
        ) : (
          <span>{leave.status}</span>
        )}
      </TableCell>
    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>

    {isopen && (
      <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 mb-3">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 mb-3">
          <h2 className="text-xl font-semibold mb-4">Apply Leave</h2>
          <div className='space-y-4'>
      <InputField label="" value={data?.description} name='description' onChange={inputHandler} type="text" />
      <InputField label="" value={data?.date} name='date' onChange={inputHandler} type="date" />
      </div>
      <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 border rounded text-gray-600 mt-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded mt-3"
              onClick={addLeave}>
                Apply
              </button>
            </div>
            </div>
            </div>
      </>
      
    )}
  </div>
  )
}

export default Leaves