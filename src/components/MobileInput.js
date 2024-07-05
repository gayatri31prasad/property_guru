import React, { useEffect, useState } from 'react'

export default function MobileInput({
    label,
    value,
    onChange,
    selectedCountry,
    onCountryChange,
    errorField,
    maxLength,
    htmlFor = 'mobile',
    required,
    readOnly,
    labelStyle,
    ...props
}) {

    const [Country, setCountry] = useState([])
    const [isVisible, setVisible] = useState(false)

    useEffect(() => { GetAllCountry() }, [])
    const GetAllCountry = () => {
        fetch('http://172.20.1.133:8080/hms-v1/api/v1/country').then(res => res.json()).then((res) => setCountry(res?.DATA)).catch(err => console.log(err))
    }
    return (
        <div className="w-full mt-1">
            <label htmlFor={htmlFor} className='ml-1 font-medium' style={{ fontSize: '14px', ...labelStyle }}>{label}{required && <small style={{ color: 'red' }}> *</small>}</label>
            <div className='w-full relative flex items-center'>
                {/* <select className='w-11' onChange={onCountryChange}>
                    {Country?.map((option, index) =>
                        <option
                            key={index?.toString()}
                            value={JSON.stringify(option)}
                            selected={option?.countryCodeId == selectedCountry?.countryCodeId}>
                            {option.countryName} {option.countryCode}
                        </option>)}
                </select> */}
                <button style={{ position: 'absolute', left: '8px' }} onClick={() => setVisible(!isVisible)}>
                    <p>{selectedCountry?.countryCode ?? '+91'}</p>
                </button>
                {isVisible && <div className='' style={{ position: 'absolute', top: '100%', left: 0, maxHeight: '30vh', overflowY: 'auto', backgroundColor: '#fff', zIndex: 1 }}>
                    {Country?.map((option, index) =>
                        <button
                            className='justify-start items-start text-left pb-1 pt-1 pl-1'
                            key={index?.toString()}
                            onClick={() => {
                                if (onCountryChange)
                                    onCountryChange(option)
                                setVisible(false)
                            }}>
                            {option.countryName} {option.countryCode}
                        </button>)}
                </div>}
                <input
                    className={`pl-11 ${props?.className}`}
                    {...props}
                    id={htmlFor}
                    value={value}
                    type='text'
                    pattern="0-9"
                    onChange={onChange}
                    maxLength={maxLength}
                    readOnly={readOnly}
                    onFocus={(e) => {
                        setVisible(false)
                        e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })
                    }}
                    onKeyDown={(e) => {
                        if (e.which === 38 || e.which === 40) {
                            e.preventDefault();
                            return
                        }
                    }}
                />
            </div>
            {errorField && <small className='font-size-10'>{errorField}</small>}
        </div>
    )
}
