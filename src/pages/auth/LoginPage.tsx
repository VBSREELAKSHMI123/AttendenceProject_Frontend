import React, { useState } from 'react'
import SideImage from '../../components/SideImage'
import { InputField } from '../../components/FormElemets/InputField'
import { TypeList } from '../../types/DeclareType.types'

import OnLoadImage from "../../assets/images/attendence2.jpeg"
import { CustomButton } from '../../components/FormElemets/Buttons/CustomButton/CustomButton'
import LoginButton from '../../components/FormElemets/Buttons/LoginButton'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { publicRequest } from '../../apis/requsetMethods'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../components/Redux/LoginSlice/login';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.loginState)
    console.log("USER:", user)


    const [data, setData] = useState<TypeList>({
        email: "",
        password: "",
        value: "",
        label: "",
        name: "",
        newpassword: "",
        otp: "",
        role: ""

    })


    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const handleLogin = async () => {

        const payload = {
            email: data.email,
            password: data.password
        }

        try {
            const res = await publicRequest.post("/api/auth/login", payload)


            if (res.data.success) {
                localStorage.setItem("token", res.data.token)

                console.log(res.data);

                const { role, user_id, fname, lname, isProfileComplete, email } = res.data.user
                const { token } = res.data


                dispatch(login({ token, role, user_id, fname, lname, email, isProfileComplete }))
                navigate('/')
                // alert(res.data.message)
            }


        } catch (error: any) {
            console.log("err", error.response.data.message || "some thing went wrong");
        }
    }


    //     axios.post("http://localhost:8080/login",data).then(
    //         response=>{
    //             if (response.data.success==true) {
    //                 sessionStorage.setItem("id",response.data.user_id)
    //                 sessionStorage.setItem("token",response.data.token)
    //                 sessionStorage.setItem("name",response.data.user_name)
    //                 sessionStorage.setItem("email",response.data.user_email)
    //                 sessionStorage.setItem("role",response.data.user_role)
    //                 navigate('/user')
    //                 alert("Successfully Logged in")
    //             } else {
    //                 alert("Login Failed")
    //             }
    //         }
    //     ).catch(error=>{
    //         console.error("Error Occured",error)
    //     })
    // }

    return (
        <div className='flex h-screen p-[70px] gap-7'>
            <div className='flex-1 h-full'>
                <SideImage src={OnLoadImage} />
            </div>
            <div className='flex-1 px-20'>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-blue-800 font-bold font-lexend'>HRFlow</h1>
                    <div>
                        <h2 className='text-xl font-bold font-lexend'>Welcome 👋</h2>
                        <p>Please Login here</p>
                    </div>
                    {/* <div className='text-blue-800 font-bold mb-5 text-2xl'>Login Page</div> */}
                    <InputField label='username' name='email' value={data.email} type='text' onChange={inputHandler} isLogin />
                    <InputField label='password' name='password' value={data.password} type='password' onChange={inputHandler} isLogin />
                    <div className='flex items-center justify-between'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                        <button onClick={() => navigate('/render')}>ForgotPassword?</button>
                    </div>
                    <LoginButton onClick={handleLogin}>Login</LoginButton>
                </div>
            </div>
        </div>
    )
}

export default LoginPage