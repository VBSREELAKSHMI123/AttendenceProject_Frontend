import React, { useState } from 'react'
import { InputField } from '../components/FormElemets/InputField'
import { TypeList } from '../types/DeclareType.types'
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { maritalStatusOption,genderOption, PROFESSIONAL } from '../utils/constants';
import { Dropdown } from '../components/FormElemets/Dropdown';

import dayjs, { Dayjs } from 'dayjs';
import { BasicDatePicker } from '../components/FormElemets/DatePicker'; 


type PersonalInformationType = {
  setTabValue: (value: string) => void
  setpersonalFormValues: (value: TypeList) => void
  personalformValues: TypeList
}

const PersonalInformation = ({ setTabValue, setpersonalFormValues, personalformValues }: PersonalInformationType) => {

  const [formError, setformError] = useState<TypeList>({
  
  })

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpersonalFormValues({ ...personalformValues, [e.target.name]: e.target.value });
  }

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setpersonalFormValues({ ...personalformValues, [e.target.name]: e.target.value });
  }

  const DateHandler = (value: Dayjs | null, name: string) => {
    setpersonalFormValues({
      ...personalformValues,
      [name]: value,
    });
  };
  

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
      <div className='flex flex-col gap-4'>
        {/* <div className='h-[100px] w-[200px]'>
          <InputField value={personalformValues.fname} name='fname' onChange={inputHandler} type="text" placeholder="First Name" />
        </div> */}
        <div className='flex gap-4 items-center'>
          <div className='flex-1'>
            <InputField label="First Name" value={personalformValues.fname} name='fname' onChange={inputHandler} type="text" placeholder="First Name" />
            {formError.fname && <p className='text-[12px] text-red-500 mt-1'>
              {formError.fname}
            </p>}
          </div>
          <div className='flex-1'>
            <InputField label="Last Name" value={personalformValues.lname} name='lname' onChange={inputHandler} type="text" placeholder="Last name" />
           { formError.lname &&<p className='text-[12px] text-red-500 mt-1'>
              { formError.lname}
            </p>}
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='flex-1'>
            <InputField label="Phone" value={personalformValues.phone} name='phone' onChange={inputHandler} type="text" placeholder="Mobile Number" />
            {formError.phone&&<p className='text-[12px] text-red-500 mt-1'>
              {  formError.phone}
            </p>}
          </div>
          <div className='flex-1'>
            <InputField label="Email" value={personalformValues.email} name='email' onChange={inputHandler} type="text" placeholder="Email Address" />
           
           {formError.email && <p className='text-[12px] text-red-500 mt-1'>
              {formError.email}
            </p>}
          </div>
        </div>
        <div className='flex gap-4 items-center'>
        <div className='flex-1'>
  <BasicDatePicker
              label="DOB"
              value={personalformValues.dob ?? null}
              name="dob"
              onChange={(newValue: dayjs.Dayjs | null) => DateHandler(newValue, 'dob')} type={''}   
               placeholder="Date of Birth"
  />
  {formError.dob && (
    <p className='text-[12px] text-red-500 mt-1'>
      {formError.dob}
    </p>
  )}
</div>
          <div className='flex-1'>
            <Dropdown
              label="Status"
              value={personalformValues.status}
              name="status"
              onChange={selectHandler}
              type="select"
              placeholder="Select Marital Status"
              options={maritalStatusOption}
            />
            {formError.status && <p className='text-[12px] text-red-500 mt-1'>
              {formError.status}
            </p>}
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='flex-1'>
            <Dropdown
              label="Gender"
              value={personalformValues.gender}
              name="gender"
              onChange={selectHandler}
              type="select"
              placeholder="Select Gender"
              options={genderOption}
            />
           {formError.gender && <p className='text-[12px] text-red-500 mt-1'>
              {formError.gender}
            </p>}
          </div>
          <div className='flex-1'>
            <InputField label="Nationality" value={personalformValues.nation} name='nation' onChange={inputHandler} type="text" placeholder="Nationality" />
           { formError.nation && <p className='text-[12px] text-red-500 mt-1'>
              { formError.nation}
            </p>}
          </div>
        </div>
        <div>
          <InputField label="Address" value={personalformValues.address} name='address' onChange={inputHandler} type="text" placeholder="Address" />
          {formError.address && <p className='text-[12px] text-red-500 mt-1'>
            {formError.address}
          </p>}
        </div>
        <div className='flex gap-4 items-center'>
          <div className='flex-1'>
            <InputField label="City" value={personalformValues.city} name='city' onChange={inputHandler} type="text" placeholder="City" />
            {formError.city && <p className='text-[12px] text-red-500 mt-1'>
              {formError.city}
            </p>}
          </div>
          <div className='flex-1'>
            <InputField label="State" value={personalformValues.state} name='state' onChange={inputHandler} type="text" placeholder="State" />
            {formError.state &&<p className='text-[12px] text-red-500 mt-1'>
              { formError.state}
            </p>}
          </div>
          <div className='flex-1'>
            <InputField label="Pin Code" value={personalformValues.pincode} name='pincode' onChange={inputHandler} type="text" placeholder="PIN Code" />
           { formError.pincode && <p className='text-[12px] text-red-500 mt-1'>
              {formError.pincode}
            </p>}
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