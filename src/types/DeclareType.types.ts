import { Dayjs } from "dayjs";

export interface TypeList {
    fname?: string ,
    name?: string ,
    email?: string,
    password?:string,
    label?: String,
    value?:  Dayjs | null | any,
    type?:string,
    newpassword?:string,
    otp?:string,
    role?:string,
    placeholder?:string,
    lname?:string,
    phone?:string,
    dob?: Dayjs | null | any,
    status?:string,
    gender?:string,
    nation?:string,
    address?:string,
    city?:string,
    state?:string,
    pincode?:string,
    empid?:string,
    uname?:string,
    emptype?:string,
    pemail?:string,
    department?:string,
    designation?:string,
    working?:string,
    join?:string,
    mode?:string,
    appointment?:File,
    salaryslip?:File,
    reliving?:File,
    experience?:File


}

