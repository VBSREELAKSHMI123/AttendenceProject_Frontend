import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { CalendarCheck, CalendarDots, CurrencyInr, GearSix, Notepad, Toolbox, Users, UsersThree } from "@phosphor-icons/react"

const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const items = [
    {
      name: "All Employee",
      icon: <UsersThree size={20} />,
      url: "/emp"
    },
    {
      name: "Attendence",
      icon: <CalendarCheck size={20} />,
      url: "/attend"
    },
    {
      name: "Payroll",
      icon: <CurrencyInr size={20} />,
      url: "/pay"
    },
    {
      name: "Jobs",
      icon: <Toolbox size={20} />,
      url: "/jjj"
    },
    {
      name: "Candidates",
      icon: <Users size={20} />,
      url: "/jjj"
    },
    {
      name: "Leaves",
      icon: <Notepad size={20} />,
      url: "/leave"
    },
    {
      name: "Holidays",
      icon: <CalendarDots size={20} />,
      url: "/holi"
    },
    {
      name: "Settings",
      icon: <GearSix size={20} />,
      url: "/set"
    }]
  const handleClick = (url: string) => {
    navigate(url)
  }
  return (
    <div className='flex flex-col h-[calc(100vh-32px)] w-[200px] bg-gray-100 justify-start items-center m-4 rounded-lg p-4 fixed top-0 '>
      <h1 className='font-bold font-lexend text-2xl mt-4 mb-3'>HR Flow</h1>
      <div className='mt-4 font-medium'>
        {items.map((item: any, index: number) =>
        (<div key={index}
          className={`w-full py-2 p-5 ${item.url == pathname ? 'text-blue-500 border border-l-blue-500 ' : 'bg-gray-100 '}   flex gap-2 items-center cursor-pointer `}
          onClick={() => handleClick(item.url)}>
          <p>{item.icon}</p>
          <p>{item.name}</p>
        </div>)
        )}
      </div>
      <div className='flex justify-between mt-auto cursor-pointer' onClick={() => navigate('/login')}>Logout</div>
    </div>
  );
}

export default SideBar;
