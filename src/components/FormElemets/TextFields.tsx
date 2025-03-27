import { useState } from "react"
import { InputField } from "./InputField"
import { TypeList } from "../../types/DeclareType.types"


const TextFields = () => {

  const [data, setData] = useState<TypeList>({
    name: "",
    email: "",
    password: "",
    label:"",
    value:""

    
    
  })

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setData({...data,[e.target.name]: e.target.value })
  }
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* <input type="text" placeholder="Enter Name" className="border p-2 w-64 rounded-md" /> */}
      <InputField label="user name" value={data.name} name='name' onChange={inputHandler} type="text" isLogin/>
      <InputField label="email" value={data.email} name='email' onChange={inputHandler} type="text" isLogin/>
      <InputField label="password" value={data.password} name='password'onChange={inputHandler} type="password" isLogin/>
      
      {/* <input type="email" placeholder="Enter Email" className="border p-2 w-64 rounded-md" />
      <input type="password" placeholder="Enter Password" className="border p-2 w-64 rounded-md" /> */}
    </div>
  )
}

export default TextFields