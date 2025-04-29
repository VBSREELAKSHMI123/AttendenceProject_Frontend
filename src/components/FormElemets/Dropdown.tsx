import React from 'react'


type DropdownType = {
    label: string,
    value: string | undefined | number,
    name: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    isLogin?: boolean,
    placeholder?: string,
    options: { label: string; value: string | number }[];
}



export const Dropdown = ({ label, value, name, onChange, type, isLogin, placeholder, options }: DropdownType) => {
    return (
        <div className='w-full h-full border border-[#ececee] rounded-lg bg-white px-3 py-0.5 flex flex-col justify-between'>
            <label htmlFor={name} className="text-[12px] text-gray-500 mb-1">
                {label}
            </label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="outline-none w-full text-sm bg-white">
                {placeholder && <option value="" className='px-2'>{placeholder}</option>}
                {options.map((option: any) => (
                    <option key={option.value} value={option.value} className='py-2 px-5 text-gray-700 '>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

