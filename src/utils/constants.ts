import { CalendarCheck, CalendarDots, CurrencyInr, GearSix, Notepad, Toolbox, Users, UsersThree } from "@phosphor-icons/react"
import { ReactNode } from "react";
// interface MenuItem {
//     name: string;
//     icon: ReactNode;
//     url: string;
//   }
export const PERSONAL = "PERSONAL"
export const PROFESSIONAL = "PROFESSIONAL"
export const DOCUMENTS = "DOCUMENTS"

export const maritalStatusOption= [
    { label: 'Single', value: 'single' },
    { label: 'Married', value: 'married' },
    { label: 'Divorced', value: 'divorced' },
    { label: 'Widowed', value: 'widowed' },
  ]

export const genderOption = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
]

export const departmentOption = [
  { label: 'Sales', value: 'sales' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Human Resources', value: 'hr' },
  { label: 'Finance', value: 'finance' },
  { label: 'Customer Support', value: 'support' },
  { label: 'Product Management', value: 'product' },
  { label: 'IT', value: 'it' },
  { label: 'Legal', value: 'legal' },
  { label: 'Operations', value: 'operations' },
]

export const employeeTypeOption = [
  { label: 'Full-Time', value: 'fulltime' },
  { label: 'Part-Time', value: 'parttime' },
  { label: 'Contract', value: 'contract' },
  { label: 'Intern', value: 'intern' },
  { label: 'Freelance', value: 'freelance' },
]

export const modeOption = [
  { label: 'On-Site', value: 'onsite' },
  { label: 'Remote', value: 'remote' },
  { label: 'Hybrid', value: 'hybrid' },
]

// const items:MenuItem[] = [
//     {
//       name: "All Employee",
//       icon: <UsersThree size={20} />,
//       url: "/emp"
//     },
//     {
//       name: "Attendence",
//       icon: <CalendarCheck size={20} />,
//       url: "/attend"
//     },
//     {
//       name: "Payroll",
//       icon: <CurrencyInr size={20} />,
//       url: "/pay"
//     },
//     {
//       name: "Jobs",
//       icon: <Toolbox size={20} />,
//       url: "/jjj"
//     },
//     {
//       name: "Candidates",
//       icon: <Users size={20} />,
//       url: "/jjj"
//     },
//     {
//       name: "Leaves",
//       icon: <Notepad size={20} />,
//       url: "/leave"
//     },
//     {
//       name: "Holidays",
//       icon: <CalendarDots size={20} />,
//       url: "/holi"
//     },
//     {
//       name: "Settings",
//       icon: <GearSix size={20} />,
//       url: "/set"
//     }]