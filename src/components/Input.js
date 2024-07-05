import React, { useState } from 'react'
import { IoIosEyeOff, IoIosEye, IoMdMail } from "react-icons/io";


export default function Input({
    icon,
    label,
    value,
    onChange,
    errorField,
    placeholder,
    maxLength,
    htmlFor,
    required,
    readOnly,
    labelStyle,
    type = 'text',
    ...props
}) {
    const [isVisible, setVisible] = useState(false)
    return (
        <div className="w-full mt-1">
            <label htmlFor={htmlFor} className='ml-1 font-medium' style={{ fontSize: '14px', ...labelStyle }}>{label}{required && <small style={{ color: 'red' }}> *</small>}</label>
            <div className='w-full relative flex items-center'>
                {label?.includes('password') || placeholder?.includes('password') ? <div className="absolute left-3 text-2xl text-gray-500 cursor-pointer" onClick={() => setVisible(!isVisible)}>
                    {isVisible ? <IoIosEye /> : <IoIosEyeOff />}
                </div>
                    : label?.includes('mail') || placeholder?.includes('mail') ? <div className="absolute left-3 text-2xl text-gray-500 cursor-pointer">
                        <IoMdMail />
                    </div>
                        : icon ? <div className="absolute left-3 text-2xl text-gray-500 cursor-pointer">
                            {icon}
                        </div>
                            : null}
                <input
                    {...props}
                    className={`${label?.includes('password') || placeholder?.includes('password') || label?.includes('mail') || placeholder?.includes('mail') ? 'pl-11' : ''} ${props?.className}`}
                    id={htmlFor}
                    value={value}
                    placeholder={placeholder}
                    type={label?.includes('password') || placeholder?.includes('password') ? isVisible ? 'text' : 'password' : type}
                    onChange={onChange}
                    maxLength={maxLength}
                    readOnly={readOnly}
                />
            </div>
            {errorField && <small className='font-size-10'>{errorField}</small>}
        </div>
    )
}
