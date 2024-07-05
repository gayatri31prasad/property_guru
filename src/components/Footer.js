import moment from 'moment'
import React from 'react'

export default function Footer() {
    return (
        <div className='fixed flex bottom-1 w-full justify-center text-center font-medium'>
            <small style={{ fontSize: '10px' }}>© {moment().year()} Property Guru, Inc. <br />  All rights reserved.</small>
        </div>
    )
}
