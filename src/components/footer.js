import React from 'react'
import github from '../images/github.png'
import fb from '../images/fb.png'
import email from '../images/email.png'
function Footer() {
    return (
        <div className='flex px-[100px] py-[20px] bg-[#112031] text-white'>
            <p className=' w-fit'>
                Developed by Lee Johnder Delute
            </p>
            <div className='inline-flex align-middle ml-auto w-fit space-x-5'>
                <p>
                    My Social Links:
                </p>
                <img src = {github} alt="github" />
                <img src = {fb} alt="fb" />
                <img src = {email} alt="email" />
            </div>
        </div>
    )
}

export default Footer
