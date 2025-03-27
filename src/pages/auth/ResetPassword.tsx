
import { TypeList } from '../../types/DeclareType.types'
import { InputField } from '../../components/FormElemets/InputField'
import { useState } from 'react'
import LoginButton from '../../components/FormElemets/Buttons/LoginButton'
import onLoadImage from '../../assets/images/attendence4.jpeg'
import SideImage from '../../components/SideImage'

export const ResetPassword = () => {
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

 const readValue=()=>{

 }

  return (
  
       
    <div className='flex h-screen p-[70px] gap-7 items-center'>
    {/* <div className='flex-1 h-full'>
        <SideImage src={onLoadImage} />
    </div> */}
    <div className='flex-1 px-20'>
        <h1 className='text-blue-800 font-bold font-lexend'>HRFlow</h1>
        <div className='flex flex-col gap-5'>
           <h1 className='font-bold text-xl font-lexend'>Set A Password</h1>
            
          
        <InputField label="Create Password" value={data.password} name='password' onChange={inputHandler} type="password" isLogin />
        <InputField label="Re-Enter Password" value={data.newpassword} name='newpassword' onChange={inputHandler} type="password"  isLogin/>

        <LoginButton onClick={readValue}>Set Password</LoginButton>
        </div>
    </div>
</div>
  
  
      )

}

export default ResetPassword



