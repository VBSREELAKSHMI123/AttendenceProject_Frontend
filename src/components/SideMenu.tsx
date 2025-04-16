import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { CalendarCheck, CalendarDots, CurrencyInr, GearSix, Notepad, Toolbox, Users, UsersThree } from "@phosphor-icons/react"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/LoginSlice/login';

type SideType = {
  userRole : string
}

const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {isAuthenticated,user} = useSelector((state:any)=>state.loginState) 
  const { pathname } = location
  const userRole:string= user.role
  const token:string= localStorage.getItem("token") ?? ""
  const dispatch = useDispatch();
  

  const items = [
    {
      name: "All Employee",
      icon: <UsersThree size={20} />,
      url: "/emp",
      role:["admin"]
    },
    {
      name: "Attendence",
      icon: <CalendarCheck size={20} />,
      url: "/attend",
      role:["user","admin"]
    },
    {
      name: "Payroll",
      icon: <CurrencyInr size={20} />,
      url: "/pay",
      role:["admin","user"]
    },
    {
      name: "Jobs",
      icon: <Toolbox size={20} />,
      url: "/jjj",
      role:["admin","user"]
    },
    {
      name: "Candidates",
      icon: <Users size={20} />,
      url: "/jjj",
      role:["admin","user"]
    },
    {
      name: "Leaves",
      icon: <Notepad size={20} />,
      url: "/leave",
      role:["admin","user"]
    },
    {
      name: "Holidays",
      icon: <CalendarDots size={20} />,
      url: "/holi",
      role:["admin","user"]
    },
    {
      name: "Settings",
      icon: <GearSix size={20} />,
      url: "/set",
      role:["admin","user"]
    }]
  const handleClick = (url: string) => {
    navigate(url)
  }

const handleLogout = () =>{
     localStorage.removeItem("token")
     dispatch(logout())
     navigate("/login")
}

  return (
    <div className='flex flex-col h-[calc(100vh-32px)] w-[200px] bg-gray-100 justify-start items-center m-4 rounded-lg p-4 fixed top-0 '>
      <h1 className='font-bold font-lexend text-2xl mt-4 mb-3'>HR Flow</h1>
      <div className='mt-4 font-medium'>
      {items
          .filter(item => !item.role || item.role.includes(userRole)) 
          .map((item, index) => (<div key={index}
          className={`w-full py-2 p-5 ${item.url == pathname ? 'text-blue-500 border border-l-blue-500 ' : 'bg-gray-100 '}   flex gap-2 items-center cursor-pointer `}
          onClick={() => handleClick(item.url)}>
          <p>{item.icon}</p>
          <p>{item.name}</p>
        </div>)
        )}
      </div>
      <div className='flex justify-between mt-auto cursor-pointer' onClick={handleLogout}>Logout</div>
    </div>
  );
}

export default SideBar;
