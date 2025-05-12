import { Upload } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { TypeList } from '../types/DeclareType.types'

type DocumentType = {
    // docformValues: TypeList,
    buttonName: string;
    files: {
      salaryslip?: File;
      certificate?: File;
      appointment?: File;
      reliving?: File;
    };
    setFiles: React.Dispatch<React.SetStateAction<{
      salaryslip?: File;
      certificate?: File;
      appointment?: File;
      reliving?: File;
    }>>;
    handleSubmit: () => Promise<void>;
    // setdocformValues: (value: TypeList) => void
}


const Documents = ({buttonName, files, setFiles, handleSubmit }: DocumentType) => {

    const [formError, setformError] = useState({})
    // const [files, setFiles] = useState<{
    //     salaryslip?: File;
    //     certificate?: File;
    //     appointment?: File;
    //     reliving?: File;
    //   }>({});

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
          const {value,name,type} = e.target
          if (type==="file") {
           const file = e.target.files?.[0]
           setFiles(prev=>({...prev,[name]:file}))
          } else {
            setFiles(prev=>({...prev,[name]:value}))
          }
      }
    return (
        <div>

            <div className="flex gap-4 mb-5">
                <div className="w-full h-24 border border-dotted flex items-center justify-center flex-col">

                    <div><label style={{cursor:'pointer'}}><Upload size={20} />
                    <input type="file" style={{display:'none'}}  name='salaryslip' onChange={handleChange}/>
                 
                    </label></div>
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
                <div className="w-full h-24 border flex items-center justify-center flex-col">
                    <div><label style={{cursor:'pointer'}}><Upload size={20} />
                    <input type="file" style={{display:'none'}}  name='certificate'  onChange={handleChange}/></label></div>
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-full h-24 border flex items-center justify-center flex-col">
                    <div><label style={{cursor:'pointer'}}><Upload size={20} />
                    <input type="file" style={{display:'none'}}  name='appointment' onChange={handleChange}/></label></div>
                   
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
                <div className="w-full h-24 border flex items-center justify-center flex-col">
                    <div><label style={{cursor:'pointer'}}><Upload size={20} />
                    <input type="file" style={{display:'none'}}  name='reliving' onChange={handleChange}/></label></div>
                    <div>Drag & Drop or choose file to upload</div>
                    <div className='text-sm text-gray-400'>Supported formats : Jpeg, pdf</div>
                </div>
            </div>
            <div className="flex justify-end gap-3 mt-5">
                <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700">
                    Cancel
                </button>
                <button className="px-5 py-2 bg-blue-600 text-white rounded-md" onClick={handleSubmit}>
                    {buttonName}
                </button>
            </div>
        </div>
    )
}

export default Documents