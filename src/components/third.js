import React from 'react'
import design from '../images/design.png'
import development from '../images/development.png'
import branding from '../images/branding.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Third() {
    return (
        <div className='max-w-full text-white bg-[#152D35]'>
            <div className='flex flex-col h-auto xs:min-h-0 lg:min-h-[500px]  bg-opacity-[90%] xs:text-[17px] lg:text-[18px]'>
                <div className='grid place-items-center text-center h-[50vh] bg-[#152D35] py-10'>
                    <div className='xs:w-[90%] lg:w-[75%]'> 
                        <h3 className='text-[30px] font-bold'>Our Services</h3>
                        <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className='font-semibold text-[21px] third-background w-full xs:min-h-[350px] bg-[#3775c5] outline-none'>
                    <div className='flex xs:flex-col lg:flex-row xs:items-center lg:items-stretch lg:place-content-center xs:space-y-10 lg:space-y-0 xs:space-x-0 lg:space-x-10 h-[100%]'>
                        <div className='grid xs:grid-flow-row sm:grid-flow-col xs:gap-y-10 sm:gap-x-10'>
                            <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                                <div className='flex flex-col place-content-center bg-white xs:py-[2.5rem] xs:px-[5rem] md:p-[5rem] lg:p-[7rem] w-full h-full'>
                                    <img src = {design} alt = "design" className='xs:w-[6rem] md:w-[8rem] mx-auto' />
                                    <h4 className='relative xs:top-[1rem] lg:top-[2rem] text-black text-center'>
                                        Design
                                    </h4>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fade-in-top' animateOnce={true}>
                                <div className='flex flex-col place-content-center bg-white xs:py-[2.5rem] xs:px-[3.5rem] md:p-[4.5rem] lg:p-[6.5rem] w-full h-full'>
                                    <img src = {development} alt = "development" className='xs:w-[6rem] md:w-[8rem] mx-auto' />
                                    <h4 className='relative xs:top-[1rem] lg:top-[2rem] text-black text-center'>
                                        Development
                                    </h4>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                            <div className='flex flex-col place-content-center bg-white xs:py-[2.5rem] mx-auto xs:px-[5rem] md:p-[5rem] lg:p-[7rem] w-full h-full'>
                                <img src = {branding} alt = "branding" className='xs:w-[6rem] md:w-[8rem] mx-auto' />
                                <h4 className='relative xs:top-[1rem] lg:top-[2rem] text-black text-center'>
                                    Branding
                                </h4>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
