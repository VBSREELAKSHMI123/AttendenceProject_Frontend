import React, { useState } from 'react'
import onLoadImage from '../../assets/images/attendence3.jpeg'
import SideImage from '../../components/SideImage'
import { InputField } from '../../components/FormElemets/InputField'
import { TypeList } from '../../types/DeclareType.types'
import { CustomButton } from '../../components/FormElemets/Buttons/CustomButton/CustomButton'
import { SETOTP } from './RenderingComponents'
import { useNavigate } from 'react-router-dom'


type StepState = "FORGOTPASSWORD" | "RESETPASSWORD" | "SETOTP"

type ForgotPasswordType = {
    
    setStep: (step: StepState) => void
}

const ForgotPassword = ({ setStep }: ForgotPasswordType) => {
    const navigate=useNavigate();

    const [data, setData] = useState<TypeList>({
        email: "",
        password: "",
        value: "",
        label: "",
        name: "",
        newpassword: "",
        otp:"",
        role:""
    })

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleStep = () => {
        setStep(SETOTP)

    }
    return (
        <div className='flex h-screen gap-5 p-[80px] items-center'>
            {/* <div className='flex-1 h-full'>
            <SideImage src={onLoadImage}/>
        </div> */}
            <div className='flex-1 px-20'>
                <button className='items-start mb-5 text-gray-500 font-lexend' onClick={()=>navigate('/')}><p>Back</p></button>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold font-lexend text-2xl'>Forgot Password</h1>
                    <p>Enter your registered email address. we will send you a code to reset your password.</p>
                    <InputField label="Email Address" value={data.email} name='email' onChange={inputHandler} type="text" isLogin/>
                    <CustomButton onClick={handleStep} >Send OTP</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword