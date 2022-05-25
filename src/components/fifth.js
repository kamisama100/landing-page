import React from 'react'
import apple from '../images/apple.png'
import facebook from '../images/facebook.png'
import reddit from '../images/reddit.png'
import mozilla from '../images/mozilla.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Fifth() {
    return (
        <div className='grid lg:grid-rows-2 bg-[#112031] text-white xs:h-[130vh] sm:h-[95vh] lg:h-[70vh] xs:min-h-[550px] sm:min-h-[550px] lg:min-h-[380px] xs:text-[17px] sm:text-[18px]'>
            <div className='flex items-center text-center w-[80%] mx-auto mt-5'>
                <p> 
                    <ScrollAnimation animateIn='fade-in-bottom' animateOnce={true}>
                        <h3 className='relative bottom-2 text-[30px] font-bold'>
                        Our Clients
                        </h3>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fade-in-top' animateOnce={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </ScrollAnimation>
                </p>
            </div>
            <ScrollAnimation animateIn='fade-in-bottom' animateOnce={true}>
                <div className='flex place-content-center'>
                    <div className='grid xs:grid-rows-2 sm:grid-cols-2 lg:grid-cols-4 xs:gap-[2rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-48 place-items-center'>
                        <img className='opacity-20 hover:opacity-100 xs:w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]' src = {apple} alt = "apple" />
                        <img className='opacity-20 hover:opacity-100 xs:w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]' src = {facebook} alt = "facebook" />
                        <img className='opacity-20 hover:opacity-100 xs:w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]' src = {reddit} alt = "reddit" />
                        <img className='opacity-20 hover:opacity-100 xs:w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]' src = {mozilla} alt = "mozilla" />
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Fifth
