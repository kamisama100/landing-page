import React from 'react'
import design from '../images/design.png'
import development from '../images/development.png'
import branding from '../images/branding.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Third() {
    return (
        <div className='grid grid-row-3 h-screen text-white bg-[#152D35] bg-opacity-[90%] text-[18px]'>
            <div className='grid place-items-center text-center h-[43vh] '>
                <div className='w-[75%]'>
                    <h3 className='text-[30px] font-bold mb-2'>Our Services</h3>
                    <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
            <div className='flex h-[30vh] justify-between px-[100px] font-semibold text-[21px] z-50'>
                <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                    <div className='grid place-content-center bg-white w-[350px] h-[60vh] z-50'>
                        <img src = {design} alt = "design" className='w-[100px] mx-auto' />
                        <h4 className='relative top-[31.5px] text-black text-center'>
                            Design
                        </h4>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fade-in-top' animateOnce={true}>
                    <div className='grid place-content-center bg-white w-[350px] h-[60vh] z-50'>
                        <img src = {development} alt = "development" className='w-[120px] mx-auto' />
                        <h4 className='relative top-5 text-black text-center'>
                            Development
                        </h4>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                    <div className='grid place-content-center bg-white w-[350px] h-[60vh] left-[56rem] z-50'>
                        <img src = {branding} alt = "branding" className='w-[120px] mx-auto' />
                        <h4 className='relative top-5 text-black text-center'>
                            Branding
                        </h4>
                    </div>
                </ScrollAnimation>
            </div>
            <div className='bg-[#3775c5] h-[40vh]'>

            </div>
        </div>
    )
}

export default Third
