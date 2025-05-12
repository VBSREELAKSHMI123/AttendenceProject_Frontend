import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Tab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileItemView from '../../../components/ProfileItemView'
import { DownloadSimple, Eye } from '@phosphor-icons/react'
import { privateRequest } from '../../../apis/requsetMethods'
import { useParams } from 'react-router-dom'
import { TypeList } from '../../../types/DeclareType.types'
import { useSelector } from 'react-redux'
import { userState } from '../../../components/Redux/store'
import ProfileDocView from '../../../components/ProfileDocView'
const flexClass = "flex gap-5 items-start mb-5"

export const ProfileDetails = () => {
    const { id } = useParams()
    const [tabValue, setTabValue] = useState<string>("1")
    const [employeeDetail, setEmployeeDetail] = useState<TypeList>({})
    const { user } = useSelector(userState)

    console.log(user);


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log(newValue);
        setTabValue(newValue)

    }

    const fetchEmployee = async (id: any) => {
        try {
            const response = await privateRequest.get(`api/employee/viewonlyemp/${user.user_id}`)
            if (response.data) {
                console.log(response.data);
                setEmployeeDetail(response.data.employee)

            }
        } catch (error) {
            console.error("Error in Displaying employee details", error);
        }
    }

    useEffect(() => {
        fetchEmployee(id)
    }, [id]);

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="PERSONAL INFORMATION" value="personalinfo" />
                        <Tab label="PROFESSIONAL INFORMATION" value="profinfo" />
                        <Tab label="DOCUMENTS" value="doc" />
                    </TabList>
                </Box>
                <TabPanel value="personalinfo">
                    <div className={flexClass}>
                        <ProfileItemView label='First Name' value={employeeDetail.fname} />
                        <ProfileItemView label='Last Name' value={employeeDetail.lname} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Mobile Number' value={employeeDetail.phone} />
                        <ProfileItemView label='Email Address' value={employeeDetail.email} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Date of Birth' value={employeeDetail.dob} />
                        <ProfileItemView label='Marital Status' value={employeeDetail.status} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Gender' value={employeeDetail.gender} />
                        <ProfileItemView label='Nationality' value={employeeDetail.nation} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Address' value={employeeDetail.address} />
                        <ProfileItemView label='City' value={employeeDetail.city} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='State' value={employeeDetail.state} underline />
                        <ProfileItemView label='PIN Code' value={employeeDetail.pincode} underline />
                    </div>
                </TabPanel>
                <TabPanel value="profinfo">
                    <div className={flexClass}>
                        <ProfileItemView label='Employee ID' value={employeeDetail.empid} />
                        <ProfileItemView label='User Name' value={employeeDetail.uname} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Employee Type' value={employeeDetail.type} />
                        <ProfileItemView label='Email Address' value={employeeDetail.pemail} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Department' value={employeeDetail.department} />
                        <ProfileItemView label='Designation' value={employeeDetail.designation} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Working Days' value={employeeDetail.working} />
                        <ProfileItemView label='Joining Date' value={employeeDetail.join} />
                    </div>
                    <div className={flexClass}>
                        <ProfileItemView label='Mode of Work' value={employeeDetail.mode} />
                    </div>

                </TabPanel>
                <TabPanel value="doc">
                    <div className='flex gap-5 items-center mb-5 '>
                        <ProfileDocView   value='Offer Letter.pdf' />
                        <ProfileDocView  value='Reliving Letter.pdf' />
                    </div>
                    <div className='flex gap-5 items-center mb-5 '>
                        <ProfileDocView value='Appointement Letter.odf' />
                        <ProfileDocView  value='Experience Certificate.pdf' />
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    )
}
