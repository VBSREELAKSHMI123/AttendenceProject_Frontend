import React, { useEffect, useState } from 'react'
import onLoadIMage from '../../assets/images/attendence1.jpeg'
import SideImage from '../../components/SideImage'
import ForgotPassword from './ForgotPassword'
import EnterOtp from './EnterOtp'
import ResetPassword from './ResetPassword'
import ImageStore from '../../components/ImageStore'


export const FORGOTPASSWORD = "FORGOTPASSWORD"
export const RESETPASSWORD = "RESETPASSWORD"
export const SETOTP = "SETOTP"

type StepState = "FORGOTPASSWORD" | "RESETPASSWORD" | "SETOTP"
export const RenderingComponents = () => {

    const image = ["src/assets/images/attendence1.jpeg", "src/assets/images/attendence2.jpeg", "src/assets/images/attendence3.jpeg", "src/assets/images/attendence4.jpeg"]

    const [current, setCurrent] = useState<number>(0)

    useEffect(() => {
        const ImageInterval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % image.length)
        }, 2000);
        return () => (clearInterval(ImageInterval))
    }, [])

    const [steps, setSteps] = useState<StepState>("FORGOTPASSWORD")


    return (
        <div className='flex h-screen p-[70px] gap-7 items-center'>
            <div className='flex-1 h-full'>
                {/* <SideImage src={image[current]} /> */}
                <ImageStore />
            </div>
            <div className='flex-1'>
                {steps === "FORGOTPASSWORD"
                    ? <ForgotPassword setStep={setSteps} />
                    : steps === "RESETPASSWORD"
                        ? <ResetPassword />
                        : <EnterOtp setStep={setSteps} />}
            </div>
        </div>
    )
}
export default RenderingComponents