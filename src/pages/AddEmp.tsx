// import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import PersonalInformation from './PersonalInformation';
import ProfessionalInformation from './ProfessionalInformation';
import Documents from './Documents';
import { PERSONAL, PROFESSIONAL, DOCUMENTS } from '../utils/constants';
import { TypeList } from '../types/DeclareType.types';
import { privateRequest, publicRequest } from '../apis/requsetMethods';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProfilecomplete } from '../components/Redux/LoginSlice/login';


const AddEmp = () => {
  const [TabValue, setTabValue] = useState<string>(PERSONAL);
  const { user } = useSelector((state: any) => state.loginState)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(user);
  const location = useLocation()
  console.log("location", location);
  console.log("state", location.state);

  const pathname = location.pathname
  const completeProfile = pathname === "/complete-profile"
  console.log(pathname);

  const id = user.user_id


  const [personalformValues, setpersonalFormValues] = useState<TypeList>({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    dob: "",
    status: "",
    gender: "",
    nation: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    placeholder: "",
    name: "",
    type: "",
  })

  const [profformValues, setprofformValues] = useState<TypeList>({
    empid: "",
    uname: "",
    emptype: "",
    pemail: "",
    department: "",
    designation: "",
    working: "",
    join: "",
    mode: ""
  })

  const [docformValues, setdocformValues] = useState<TypeList>({
    appointment: undefined,
    salaryslip: undefined,
    reliving: undefined,
    experience: undefined
  })


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  //  function handleSubit(){
  //   switch(TabValue){
  //     case PERSONAL:
  //       setTabValue(PROFESSIONAL)
  //       break;
  //     case 
  //   }
  //  }

  const handleSubmit = async () => {
    try {
      const data = { ...personalformValues, ...profformValues }
      console.log("data", data);

      const response = await privateRequest.put(`/api/employee/update-emp/${id}`, data)
      console.log("response", response);

      if (response.data && response.data.success) {
        dispatch(updateProfilecomplete(true))
        navigate("/")
      }

      if (response.data.success) {
        alert("Registered Successfully")
      } else {
        alert("Registration Failed")
      }
      console.log(data);
    } catch (error) {
      console.error("Error", error)
    }
  }

  // const fetchUserData = async () => {
  //   const res = await privateRequest.get(`/user/user-details/${id}`)
  //   setpersonalFormValues(res.data.userDetails)
  // }

  useEffect(() => {
    if (completeProfile) {
      setpersonalFormValues(prev => ({ ...prev, fname: user.fname, lname: user.lname, email: user.email }))
    } else {
      // fetchUserData()
    }
  }, [])

  return (
    <div className='relative flex flex-col gap-4 p-5 border rounded-sm'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={TabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Personal Information" value={PERSONAL} />
              <Tab label="Professional Information" value={PROFESSIONAL} />
              <Tab label="Documents" value={DOCUMENTS} />
            </TabList>
          </Box>
          <TabPanel value={PERSONAL}><PersonalInformation setTabValue={setTabValue} personalformValues={personalformValues} setpersonalFormValues={setpersonalFormValues} /></TabPanel>
          <TabPanel value={PROFESSIONAL}><ProfessionalInformation setTabValue={setTabValue} profformValues={profformValues} setprofformValues={setprofformValues} onSubmit={handleSubmit} /></TabPanel>
          <TabPanel value={DOCUMENTS}><Documents buttonName={completeProfile ? "Submit" : "Update"} handleSubmit={handleSubmit} /></TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}
export default AddEmp