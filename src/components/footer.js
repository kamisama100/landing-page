import React from 'react'
import github from '../images/github.png'
import fb from '../images/fb.png'
import email from '../images/email.png'
function Footer() {
    return (
        <div className='grid xs:grid-rows-2 lg:grid-rows-1 xs:grid-cols-1 lg:grid-cols-2 xs:place-items-center lg:place-items-start xs:px-[0rem] xs:py-[1rem] lg:px-[5rem] lg:py-[1.5rem] xs:space-y-[1.3rem] lg:space-y-0 bg-[#112031] text-white'>
            <div className='xs:row-start-2 lg:row-span-1'>
                <p className='w-fit font-[500]'>
                    Developed by Lee Johnder Delute
                </p>
            </div>
            <div className='inline-flex xs:row-start-1 lg:row-span-2 space-x-5 xs:ml-0 lg:ml-auto font-[500]'>
                <p>
                    Follow me on socials:
                </p>
                <img src = {github} alt="github" />
                <img src = {fb} alt="fb" />
                <img src = {email} alt="email" />
            </div>
        </div>
    )
}

export default Footer
