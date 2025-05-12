import { DownloadSimple } from '@phosphor-icons/react'
import { Eye } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
interface ProfileDocViewTypes {
    value: string
}

const ProfileDocView = ({value}: ProfileDocViewTypes) => {
    return (
        <div className='flex-1 flex border rounded-lg border-gray-200 justify-between items-center p-3'>
        <p>{value}</p>
        <div className='flex gap-2 items-center '><Eye size={25} className='cursor-pointer ' /><DownloadSimple size={25} className='cursor-pointer'/></div>
        </div>
    )
}

export default ProfileDocView