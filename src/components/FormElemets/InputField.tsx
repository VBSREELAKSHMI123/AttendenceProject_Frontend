import React, { useState } from "react";
import { TypeList } from "../../types/DeclareType.types";
import { Eye, EyeSlash } from "@phosphor-icons/react";

type HandleType = {
  label?: string;
  value: string | undefined | number;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLogin?: boolean;
  placeholder?: string;
  errorMessage?: string;
};
//type , onChange, name , password condition , style
//style modification

export const InputField = ({
  label,
  value,
  name,
  onChange,
  type,
  isLogin,
  placeholder,
  errorMessage,
}: HandleType) => {
  // const [isShow, setIsShow] = useState<boolean>(true)
  const [passwordType, setpasswordType] = useState<string>(type);
  const handleShowPassword = () => {
    if (passwordType === "password") {
      setpasswordType("text");
    } else {
      setpasswordType("password");
    }
  };
  return (
    <div className="">
      <div
        className={`w-full h-full border ${
          errorMessage
            ? "border-red-600"
            : isLogin
            ? "border-blue-500"
            : "border-[#ececee]"
        } rounded-lg bg-white px-3 py-0.5 flex justify-between items-center`}
      >
        <div className="flex flex-col w-full">
          <label
            htmlFor=""
            className={`${
              errorMessage ? "text-red-600" : "text-blue-500"
            } text-[12px]  mb-1`}
          >
            {label}
          </label>
          <input
            className="outline-none w-full text-[12px]"
            type={type === "password" ? passwordType : type}
            name={name}
            id=""
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
        {type == "password" && (
          <div className="cursor-pointer" onClick={handleShowPassword}>
            {passwordType === "password" ? (
              <Eye size={20} />
            ) : (
              <EyeSlash size={20} />
            )}
          </div>
        )}
      </div>
      {errorMessage && <p className="text-red-500 text-sm ">{errorMessage}</p>}
    </div>
  );
};
