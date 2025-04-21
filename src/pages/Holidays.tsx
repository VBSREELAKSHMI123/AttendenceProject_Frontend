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


type HolidayType = {
  date:string,
  day:string,
  name:string
}

const Holidays = () => {
  const [holidays,setHolidays]=useState<HolidayType[]>([])
  const [data,setData]=useState({
       name:"",
       date:""
  })
  const [isopen,setisOpen]=useState<boolean>(false)
  const closeModal = () => {
    setData({ name: "", date: "" }); 
    setisOpen(false);
  };

  const addHoliday = async () =>{
    try{
         const response = await privateRequest.post("/api/holiday/addholiday",data)
         if (response.data.success) {
          
          alert("Holiday Added Successfully!")
           fetchHoliday()
           closeModal()
           
         }
    }catch(error)  {
      console.error("Error fetching Holidays:", error);
    }
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setData({...data,[e.target.name]: e.target.value})
  }

  const fetchHoliday = async () =>{
   try{
         const response=await privateRequest.get("/api/holiday/viewholiday")
         setHolidays(response.data)
   }
    catch(error)  {
      console.error("Error fetching Holidays:", error);
    }
  }

  useEffect(()=>{
    fetchHoliday()
  },[])



  return (
<div className="p-4">
      <div className="flex justify-end mb-4">
        <button className="bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50" onClick={()=>setisOpen(true)}>Add Holiday</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Day</TableCell>
              <TableCell align="left">Holiday Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {holidays.map((holiday) => (
              <TableRow key={holiday.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{dayjs(holiday.date).format("YYYY - MM- dd")}</TableCell>
                <TableCell align="left">{holiday.day}</TableCell>
                <TableCell align="left">{holiday.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isopen && (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 mb-3">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 mb-3">
            <h2 className="text-xl font-semibold mb-4">Add New Holiday</h2>
            <div className='space-y-4'>
        <InputField label="" value={data?.name} name='name' onChange={inputHandler} type="text" />
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
                onClick={addHoliday}>
                  Add
                </button>
              </div>
              </div>
              </div>
        </>
        
      )}
    </div>
  
 
  )
}

export default Holidays