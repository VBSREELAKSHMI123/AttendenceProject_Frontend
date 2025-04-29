import React, { useState } from 'react'
import { TypeList } from '../types/DeclareType.types'
import { InputField } from '../components/FormElemets/InputField'
import { departmentOption, DOCUMENTS, employeeTypeOption, modeOption } from '../utils/constants'
import { Dropdown } from '../components/FormElemets/Dropdown'

type ProfessionalTypes = {
  setTabValue: (value: string) => void
  setprofformValues: (value: TypeList) => void
  profformValues: TypeList,
  onSubmit: () => void
}


 


const ProfessionalInformation = ({ setTabValue, profformValues, setprofformValues, onSubmit }: ProfessionalTypes) => {
  // const [data, setData] = useState<TypeList>({
  //   empid: "",
  //   uname: "",
  //   emptype: "",
  //   pemail: "",
  //   department: "",
  //   designation: "",
  //   working: "",
  //   join: "",
  //   mode: ""
  // })

  const [formError, setformError] = useState<TypeList>({})

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setprofformValues({ ...profformValues, [e.target.name]: e.target.value });
  }


  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setprofformValues({ ...profformValues, [e.target.name]: e.target.value });
  };

  const handleValidations = async (formData: any) => {
    let error: any = {}
    if (!formData.empid) {
      error.empid = "Employee Id is Missing"
    }
    if (!formData.uname) {
      error.uname = "User Name is Missing"
    }
    if (!formData.type) {
      error.type = "Type is Missing"
    }
    if (!formData.pemail) {
      error.pemail = "Email Address is Missing"
    }
    if (!formData.department) {
      error.department = "Department is Missing"
    }
    if (!formData.designation) {
      error.designation = "Designation is Missing"
    }
    if (!formData.working) {
      error.working = "Working Days is Missing"
    }

    if (!formData.join) {
      error.join = "Joining Date is Missing"
    }
    if (!formData.mode) {
      error.mode = "Mode of Work is Missing"
    }
    return error
  }

  const handleNext = async () => {
    const errors = await handleValidations(profformValues)
    console.log(errors)
    setformError(errors)

    if (Object.keys(errors).length === 0) {
      // setTabValue(DOCUMENTS)
      onSubmit()
    }
  }
  return (
    <div className='relative flex flex-col gap-4 p-5 border rounded-sm'>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="Employee ID" value={profformValues.empid} name='empid' onChange={inputHandler} type="text" placeholder="Employee ID" />
           { formError.empid && <p className='text-[12px] text-red-500 mt-1'>
              {formError.empid}
            </p>}
          </div>
          <div className='flex-1 h-10'>
            <InputField label="User Name" value={profformValues.uname} name='uname' onChange={inputHandler} type="text" placeholder="User name" />
           {formError.uname && <p className='text-[12px] text-red-500 mt-1'>
              {formError.uname}
            </p>}
          </div>
        </div>
        <div className='flex gap-5 items-center'>
        <div className='flex-1 h-10'>
  <Dropdown
    label="Type"
    value={profformValues.emptype}
    name="emptype"
    onChange={selectHandler}
    type="select"
    placeholder="Select Employee Type"
    options={employeeTypeOption}
  />
 {formError.emptype && <p className='text-[12px] text-red-500 mt-1'>
    { formError.emptype}
  </p>}
</div>
          <div className='flex-1 h-10'>
            <InputField label="Email Address" value={profformValues.pemail} name='pemail' onChange={inputHandler} type="text" placeholder="Email Address" />
           {formError.pemail && <p className='text-[12px] text-red-500 mt-1'>
              {formError.pemail}
            </p>}
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="Department" value={profformValues.department} name='department' onChange={inputHandler} type="text" placeholder="Department" />
           { formError.department && <p className='text-[12px] text-red-500 mt-1'>
              {formError.department}
            </p>}
          </div>
          <div className='flex-1 h-10'>
  <Dropdown
    label="Department"
    value={profformValues.status}
    name="department"
    onChange={selectHandler}
    type="select" 
    placeholder="Select Department"
    options={departmentOption}
  />
  {formError.department &&<p className='text-[12px] text-red-500 mt-1'>
    { formError.department}
  </p>}
</div>

        </div>
        <div className='flex gap-5 items-center'>
          <div className='flex-1 h-10'>
            <InputField label="Working" value={profformValues.working} name='working' onChange={inputHandler} type="number" placeholder="Working Days" />
          { formError.working && <p className='text-[12px] text-red-500 mt-1'>
              { formError.working}
            </p>}
          </div>
          <div className='flex-1 h-10'>
            <InputField label="Joining Date" value={profformValues.join} name='join' onChange={inputHandler} type="date" placeholder="Joining Date" />
           {formError.join && <p className='text-[12px] text-red-500 mt-1'>
              {formError.join}
            </p>}
          </div>
        </div>
        <div className='flex gap-5 items-center'>
  <div className='flex-1 h-10'>
    <Dropdown
      label="Mode of Working"
      value={profformValues.mode}
      name='mode'
      onChange={selectHandler}
      type="select"
      placeholder="Select Mode of Working"
      options={modeOption}
    />
    {formError.mode && <p className='text-[12px] text-red-500 mt-1'>
      { formError.mode}
    </p>}
  </div>
</div>
      </div>
      <div className="flex justify-end gap-3 mt-10">
        <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700">
          Cancel
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-md" onClick={onSubmit}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ProfessionalInformation