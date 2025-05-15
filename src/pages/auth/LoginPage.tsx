import React, { useState } from "react";
import SideImage from "../../components/SideImage";
import { InputField } from "../../components/FormElemets/InputField";
import OnLoadImage from "../../assets/images/attendence2.jpeg";
import LoginButton from "../../components/FormElemets/Buttons/LoginButton";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../apis/requsetMethods";
import { useDispatch } from "react-redux";
import { login } from "../../components/Redux/LoginSlice/login";
import { LoginTypes } from "../../types/AuthTypes.type";

type ValidationType = {
  email?: string;
  password?: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState<LoginTypes>({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<ValidationType>({});

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginValidation = () => {
    let error: ValidationType = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const passwordRegex = /^[A-Z][A-Za-z\d]{5,}$/;
    if (!data.email) {
      error.email = "Email Required";
    } else if (!emailRegex.test(data.email)) {
      error.email = "Invalid Email";
    }

    if (!data.password) {
      error.password = "Password Required";
    } else if (data.password.length < 3) {
      error.password = "Password must be 3 digits";
    }
    // } else if (!passwordRegex.test(data.password)) {

    //     error.password = "Password must start with capital,minimum 1 digit and number and 6 characters"
    // }
    return error;
  };

  const handleLogin = async () => {
    const validationErrors = loginValidation();
    console.log(validationErrors);
    const l = Object.keys(validationErrors);
    setFormError(validationErrors);
    console.log(l);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await publicRequest.post("/api/auth/login", data);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          console.log(res.data);
          const {
            role,
            user_id,
            fname,
            lname,
            isProfileComplete,
            email,
            designation,
          } = res.data.user;
          const { token } = res.data;
          dispatch(
            login({
              token,
              role,
              user_id,
              fname,
              lname,
              email,
              isProfileComplete,
              designation,
            })
          );
          navigate("/dash");
          // alert(res.data.message)
        }
      } catch (error: any) {
        console.log(
          "err",
          error.response.data.message || "some thing went wrong"
        );
      }
    }
  };
  //   lg - 1024px

  return (
    <div className="flex h-screen  p-[70px] gap-10">
      <div className="flex-1 max-md:hidden  ">
        <SideImage src={OnLoadImage} />
      </div>
      <div className="flex-1 flex items-center ">
        <div className="flex flex-col gap-5  w-full">
          <h1 className="text-blue-800 font-bold font-lexend">HRFlow</h1>
          <div>
            <h2 className="text-xl font-bold font-lexend">Welcome 👋</h2>
            <p>Please Login here</p>
          </div>
          {/* <div className='text-blue-800 font-bold mb-5 text-2xl'>Login Page</div> */}
          <InputField
            label="username"
            name="email"
            value={data.email}
            type="text"
            onChange={inputHandler}
            isLogin
            errorMessage={formError.email}
          />
          <InputField
            label="password"
            name="password"
            value={data.password}
            type="password"
            onChange={inputHandler}
            isLogin
            errorMessage={formError.password}
          />
          <div className="flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
            <button onClick={() => navigate("/render")}>ForgotPassword?</button>
          </div>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
