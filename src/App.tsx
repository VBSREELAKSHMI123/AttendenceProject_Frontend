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

function App() {

  const token = localStorage.getItem("token")

  return (
    <Routes>
      <Route element={<ProtectedRoute ><UserDashboard /></ProtectedRoute>} path='/'>
        <Route element={<ProtectedRoute ><EmpList /></ProtectedRoute>} path='/emp' />
        <Route element={<ProtectedRoute><AddEmp /></ProtectedRoute>} path='/addemp' />
        <Route element={<ProtectedRoute><ViewOnlyEmp /></ProtectedRoute>} path='/view/:id' />
        <Route element={<ProtectedRoute><Attendence /></ProtectedRoute>} path='/attend' />
        <Route element={<ProtectedRoute><Payroll /></ProtectedRoute>} path='/pay' />
        <Route element={<ProtectedRoute><Leaves /></ProtectedRoute>} path='/leave' />
        <Route element={<ProtectedRoute><Holidays /></ProtectedRoute>} path='/holi' />
        <Route element={<ProtectedRoute><Settings /></ProtectedRoute>} path='/set' />
        {/* <Route index element={<h1> dashboard</h1>} /> */}
      </Route>
      <Route element={!token ? <LoginPage /> : <Navigate to={"/"} />} path='/login' />
      <Route element={<UserDashboard />} path='/user' />
      <Route element={<RegisterPage />} path='/register' />
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