import React, { useState } from 'react'
import SideImage from '../../components/SideImage'
import TextFields from '../../components/FormElemets/TextFields'
import LoginButton from '../../components/FormElemets/Buttons/LoginButton'
import { InputField } from '../../components/FormElemets/InputField'
import { TypeList } from '../../types/DeclareType.types'
import { CustomButton } from '../../components/FormElemets/Buttons/CustomButton/CustomButton'
import onLoadIMage from '../../assets/images/attendence1.jpeg'
import { Checkbox, FormControlLabel } from '@mui/material'
import ImageStore from '../../components/ImageStore'
import axios from 'axios'
import { privateRequest } from '../../apis/requsetMethods'

const RegisterPage = () => {
    const image=["src/assets/images/attendence1.jpeg","src/assets/images/attendence2.jpeg","src/assets/images/attendence3.jpeg","src/assets/images/attendence4.jpeg"]
    const [data, setData] = useState<TypeList>({
        name: "",
        email: "",
        password: "",
        label: "",
        value: "",
        newpassword: "",
        otp:"",
        role:""
    })

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const readValue = async () =>{
       try{
            const response = await privateRequest.post("/api/admin/adduser",data)
            if (response.data.success) {
                alert("Registered Successfully")
            } else {
                alert("Registration Failed")
            }
            console.log(response)
       }catch(error){
            console.error("Error",error)
        }
    }

    return (
        <div className='flex h-screen p-[70px] gap-7 items-center'>
            <div className='flex-1 h-full'>
                <SideImage src={onLoadIMage}/>
            </div>
            <div className='flex-1'>
                <div className='px-20'>

                    <h1 className='text-blue-800 text-2xl font-bold mb-10 font-lexend '>HRFlow</h1>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='font-bold text-xl font-lexend'>Welcome 👋</h2>
                            <p className='font-lexend'>Please enter your details to create account on HR Flow</p>
                        </div>
                        <InputField label="user name" value={data?.name} name='name' onChange={inputHandler} type="text" isLogin/>
                        <InputField label="email" value={data.email} name='email' onChange={inputHandler} type="text" isLogin/>
                        <InputField label="role" value={data.role} name='role' onChange={inputHandler} type="text" isLogin/>
                        <InputField label="password" value={data.password} name='password' onChange={inputHandler} type="password"  isLogin/>
                        <p><FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" /></p>
                       <LoginButton onClick={readValue}>Register</LoginButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage