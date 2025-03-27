import { Upload } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { TypeList } from '../types/DeclareType.types'

type DocumentType = {
    docformValues:TypeList,
    setdocformValues:(value:TypeList)=>void
}


const Documents = ({docformValues,setdocformValues}:TypeList) => {

const [formError,setformError]=useState({})

    return (
        <div>

            <div className="flex gap-4 mb-5">   
                <div className="w-full h-24 border border-dotted flex items-center justify-center flex-col">
                  
                    <div><Upload size={20} /></div>
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
                <div className="w-full h-24 border flex items-center justify-center flex-col">
                    <div><Upload size={20} /></div>
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-full h-24 border flex items-center justify-center flex-col">
                    <div><Upload size={20} /></div>
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
                <div className="w-full h-24 border flex items-center justify-center flex-col">
                    <div><Upload size={20} /></div>
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
            </div>
            <div className="flex justify-end gap-3 mt-5">
                <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700">
                    Cancel
                </button>
                <button className="px-5 py-2 bg-blue-600 text-white rounded-md">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Documents