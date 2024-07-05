'use clint'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import Modal from "react-modal";
import { Constants } from './constant';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="flex justify-between items-center pr-2.5 pl-2.5" style={{ boxShadow: '0px 4px 4px 0px #0000000F' }}>
            <Link href={'/'}>
                <img src={'/images/Logo.png'} alt='logo' width={'90px'} />
            </Link>
            <div className='flex gap-2.5 items-center'>
                <button
                    onClick={() => setIsOpen(true)}
                    className='h-9 w-32 rounded-full font-semibold text-white'
                    style={{ backgroundImage: 'linear-gradient(96.77deg, #788EFF 6.05%, #3956F6 92.54%)' }}>
                    Login
                </button>
                <FaHeart className='text-3xl' color={'#DE0128'} />
            </div>
            <Modal
                ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className={'modalStyle'}
                overlayClassName={'modalOverlayStyle'}
            >
                <div className='bg-white rounded-lg max-h-full my-4 flex flex-col p-2.5 w-72'>
                    <button onClick={() => setIsOpen(false)} className='self-end font-bold'>
                        X
                    </button>
                    <div className='flex flex-col items-center w-full px-2'>
                        <h2 className='font-bold text-3xl'>Login</h2>
                        <Constants.MobileInput label={'Mobile No.'} placeholder='Enter mobile no' maxLength={10} labelStyle={{ marginTop: '20px' }} />
                        <Constants.Input label={'Password'} placeholder='password' />
                        <small className="self-end text-gray-500 mt-1 cursor-pointer">Forgot Password?</small>
                        <button
                            className='h-9 w-40 rounded-full font-semibold text-white mt-3'
                            style={{ backgroundImage: 'linear-gradient(96.77deg, #788EFF 6.05%, #3956F6 92.54%)' }}>
                            Login
                        </button>
                        <p className="mt-4 text-sm cursor-pointer">Don’t have an account? <span className='font-bold'>Register</span></p>
                    </div>
                </div>
            </Modal>
        </header>
    )
}
