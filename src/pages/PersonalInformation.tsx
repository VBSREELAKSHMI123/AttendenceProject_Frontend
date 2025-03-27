import React, { useState } from 'react'
import { InputField } from '../components/FormElemets/InputField'
import { TypeList } from '../types/DeclareType.types'
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { PROFESSIONAL } from '../utils/constants';

type PersonalInformationType = {
  setTabValue: (value: string) => void
  setpersonalFormValues: (value: TypeList) => void
  personalformValues: TypeList
}

const PersonalInformation = ({ setTabValue, setpersonalFormValues, personalformValues }: PersonalInformationType) => {

  const [formError, setformError] = useState<TypeList>({})

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpersonalFormValues({ ...personalformValues, [e.target.name]: e.target.value });
  }

  const handleValidations = async (formData: any) => {
    let error: any = {}
    if (!formData.fname) {
      error.fname = "First Name must be filled"
    }
    if (!formData.lname) {
      error.lname = "Last Name must be filled"
    }
    if (String(formData.phone).length < 10) {
      error.phone = "Phone number must be 10 digits"
    }
    if (!formData.email) {
      error.email = "Email must be filled"
    }
    if (!formData.dob) {
      error.dob = "DOB must be filled"
    }
    if (!formData.status) {
      error.status = "Marital Status must be filled"
    }
    if (!formData.gender) {
      error.gender = "Gender must be filled"
    }
    if (!formData.nation) {
      error.nation = "Nationality must be filled"
    }

    if (!formData.address) {
      error.address = "Address must be filled"
    }
    if (!formData.city) {
      error.city = "City must be filled"
    }

    if (!formData.state) {
      error.state = "State must be filled"
    }
    if (!formData.pincode) {
      error.pincode = "Pincode must be filled"
    }
    return error
  }

  const handleNext = async () => {

    const errors = await handleValidations(personalformValues)
    console.log(errors);
    setformError(errors)


    if (Object.keys(errors).length === 0) {
      setTabValue(PROFESSIONAL)
    }


  }

  return (

    <div className='relative flex flex-col gap-4 p-5 border rounded-sm'>
      <Avatar src="/broken-image.jpg" className='mb-5' />
      <div className='flex flex-col gap-7'>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.fname} name='fname' onChange={inputHandler} type="text" placeholder="First Name" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.fname && formError.fname}
            </p>
          </div>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.lname} name='lname' onChange={inputHandler} type="text" placeholder="Last name" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.lname && formError.lname}
            </p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.phone} name='phone' onChange={inputHandler} type="text" placeholder="Mobile Number" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.phone && formError.phone}
            </p>
          </div>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.email} name='email' onChange={inputHandler} type="text" placeholder="Email Address" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.email && formError.email}
            </p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.dob} name='dob' onChange={inputHandler} type="date" placeholder="Date of Birth" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.dob && formError.dob}
            </p>
          </div>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.status} name='status' onChange={inputHandler} type="text" placeholder="Marital Status" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.status && formError.status}
            </p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.gender} name='gender' onChange={inputHandler} type="text" placeholder="Gender" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.gender && formError.gender}
            </p>
          </div>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.nation} name='nation' onChange={inputHandler} type="text" placeholder="Nationality" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.status && formError.status}
            </p>
          </div>
        </div>
        <InputField label="" value={personalformValues.address} name='address' onChange={inputHandler} type="text" placeholder="Address" />
        <p className='text-[12px] text-red-500 mt-1'>
          {formError.address && formError.address}
        </p>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.city} name='city' onChange={inputHandler} type="text" placeholder="City" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.city && formError.city}
            </p>
          </div>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.state} name='state' onChange={inputHandler} type="text" placeholder="State" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.state && formError.state}
            </p>
          </div>
          <div className='flex-1 h-10'>
            <InputField label="" value={personalformValues.pincode} name='pincode' onChange={inputHandler} type="text" placeholder="PIN Code" />
            <p className='text-[12px] text-red-500 mt-1'>
              {formError.pincode && formError.pincode}
            </p>
          </div>
      
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-10">
        <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700">
          Cancel
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-md" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default PersonalInformation