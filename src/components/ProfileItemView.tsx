import React from 'react'

type ProfileType = {
    underline?:boolean,
    label:string,
    value:string | undefined
}

const ProfileItemView = ({underline,label,value}:ProfileType) => {
  return (
    <div className={`flex-1 flex flex-col gap-2 items-start ${!underline && "border-b border-b-[#f6f6f6]"}  pb-4 `}>
        <p className='text-gray-400'>{label}</p>
        <p>{value}</p>
    </div>
  )
}
export default ProfileItemView