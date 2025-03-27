import React, { useState } from 'react'
import SideImage from '../../components/SideImage'
import onLoadImage from '../../assets/images/attendence4.jpeg'
import { TypeList } from '../../types/DeclareType.types'
import { InputField } from '../../components/FormElemets/InputField'
import { Checkbox, FormControlLabel } from '@mui/material'
import { CustomButton } from '../../components/FormElemets/Buttons/CustomButton/CustomButton'
import { RESETPASSWORD } from './RenderingComponents'
import { useNavigate } from 'react-router-dom'

type stepState = "FORGOTPASSWORD" | "RESETPASSWORD" | "SETOTP"

type EnterOtpType = {
    setStep : (step : stepState)=>void
}



const EnterOtp = ({setStep}:EnterOtpType) => {
const navigate=useNavigate();

   const [data, setData] = useState<TypeList>({
          name: "",
          email: "",
          password: "",
          label: "",
          value: "",
          newpassword:"",
          otp:"",
          role:""
      })
  
      const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
          setData({ ...data, [e.target.name]: e.target.value })
      }

      const handleStep = () =>{
          setStep(RESETPASSWORD)
      }

  return (
        <div className='flex h-screen gap-5 p-[80px] items-center'>
            {/* <div className='flex-1 h-full'>
            <SideImage src={onLoadImage}/>
        </div> */}
            <div className='flex-1 px-20'>
                <button className='items-start mb-5 text-gray-500 font-lexend' onClick={()=>navigate('/forgot')}><p>Back</p></button>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold font-lexend text-2xl'>Enter OTP</h1>
                    <p>We have share a code of your registered email address</p>
                    <InputField label="Enter OTP" value={data.otp} name='otp' onChange={inputHandler} type="number" isLogin/>
                    <CustomButton onClick={handleStep} >Verify</CustomButton>
                </div>
            </div>
        </div>
  )
}

export default EnterOtp