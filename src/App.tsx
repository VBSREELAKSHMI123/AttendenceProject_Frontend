import { Button } from '@mui/material'
import './App.css'
import SideImage from './components/SideImage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ForgotPassword from './pages/auth/ForgotPassword'
import EnterOtp from './pages/auth/EnterOtp'
import ResetPassword from './pages/auth/ResetPassword'
import RenderingComponents from './pages/auth/RenderingComponents'
import { Routes, Route, Navigate } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import UserDashboard from './pages/Dashboard/UserDashboard'
import DashboardLayout from './components/DashboardLayout'
import Navbar from './components/Navbar'
import Attendence from './pages/Attendence'
import Payroll from './pages/Payroll'
import Leaves from './pages/Leaves'
import Holidays from './pages/Holidays'
import Settings from './pages/Settings'
import AddEmp from './pages/AddEmp'
import ViewOnlyEmp from './pages/ViewOnlyEmp'
import EmpList from './pages/EmpList'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useSelector } from 'react-redux'
import { ComplateProfile } from './pages/ComplateProfile'

function App() {
  const { isAuthenticated } = useSelector((state: any) => state.loginState)
  return (
    <Routes>
      <Route element={<ProtectedRoute allowedroles={["user", "admin"]}><UserDashboard /></ProtectedRoute>} path='/'>
        <Route element={<ProtectedRoute allowedroles={["admin"]}><EmpList /></ProtectedRoute>} path='/emp' />
        <Route element={<ProtectedRoute allowedroles={["admin"]}><AddEmp /></ProtectedRoute>} path='/addemp' />
        <Route element={<ProtectedRoute allowedroles={["user", "admin"]}><ViewOnlyEmp /></ProtectedRoute>} path='/view/:id' />
        <Route element={<ProtectedRoute allowedroles={["user", "admin"]}><Attendence /></ProtectedRoute>} path='/attend' />
        <Route element={<ProtectedRoute allowedroles={["user", "admin"]}><Payroll /></ProtectedRoute>} path='/pay' />
        <Route element={<ProtectedRoute allowedroles={["user", "admin"]}><Leaves /></ProtectedRoute>} path='/leave' />
        <Route element={<ProtectedRoute allowedroles={["user", "admin"]}><Holidays /></ProtectedRoute>} path='/holi' />
        <Route element={<ProtectedRoute allowedroles={["user", "admin"]}><Settings /></ProtectedRoute>} path='/set' />
        {/* <Route index element={<h1> dashboard</h1>} /> */}
      </Route>
      <Route element={<AddEmp />} path='/complete-profile' />
      <Route element={!isAuthenticated ? <LoginPage /> : <Navigate to={"/"} />} path='/login' />
      <Route element={<RegisterPage />} path='/register' />
      {/* <Route element={<EnterOtp setStep={}/>} path='/otp' />
      <Route element={<ForgotPassword />} path='/forgot' /> */}
      <Route element={<RenderingComponents />} path='/render' />
      <Route element={<ResetPassword />} path='/reset' />
      <Route element={< h1>No page found</h1>} path='*' />
    </Routes>

  )
}

export default App



{/* <Route path='/' element={<RegisterPage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/otp' element={<EnterOtp/>}/>
  <Route path='/forgot' element={<ForgotPassword/>}/>
  <Route path='/reset' element={<ResetPassword/>}/>
  <Route path='/render' element={<RenderingComponents/>}/>
  <Route path='/side' element={<SideMenu/>}/>
  <Route path='/dash' element={<DashboardLayout/>}/>
  <Route path='/nav' element={<Navbar/>}/> */}