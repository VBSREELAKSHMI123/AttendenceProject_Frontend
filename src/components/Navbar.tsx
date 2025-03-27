import React from 'react'


type NavType = {
    children:string
}

const Navbar = ({children}:NavType) => {
  return (
    <div className='w-[calc(100%-32px)] h-[60px] border border-gray-200 rounded-md justify-center items-start p-2 bg-gray-100 sticky top-4'>{children}</div>
  )
}

export default Navbar