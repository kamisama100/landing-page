import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function Sixth() {
    return (
        <div className='flex flex-col bg-[#D4ECDD] bg-opacity-80 xs:h-auto sm:h-[140vh] lg:h-[130vh] gap-y-[2rem] xs:min-h-[750px] lg:min-h-[650px] text-black xs:py-[3rem] sm:py-[5rem] xs:px-[3rem] sm:px-[7rem]'>
            <h3 className='min-w-fit sm:min-w-[450px] h-fit font-bold xs:text-center md:text-left xs:text-[28px] lg:text-[30px]'>
            Comments from our Clients
            </h3>
            <div className='grid grid-rows-2 relative md:left-10 text-left text-black text-[16px] font-[500] md:w-[33rem] lg:w-[35rem] xs:gap-y-6 lg:gap-y-0 '>
                <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                    <div className='bg-white xs:py-[2rem] xs:pb-[7rem] xs:px-[2rem] md:py-[3rem] md:pb-[6rem] md:px-[3rem]'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dui eu arcu dictum vestibulum ut eu augue. Curabitur lobortis ac sem quis gravida. Donec enim sem, blandit sed vehicula a, tincidunt sit amet ex.
                        </p>
                        <h3 className='text-[1.25rem] relative top-[1.5rem] float-right text-blue-800 font-semibold'>
                            Famous Client
                        </h3>
                    </div> 
                </ScrollAnimation>
                <ScrollAnimation animateIn='fade-in-right' animateOnce={true}>
                    <div className='bg-white xs:py-[2rem] xs:pb-[7rem] xs:px-[2rem] md:py-[3rem] md:pb-[6rem] md:px-[3rem]'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dui eu arcu dictum vestibulum ut eu augue. Curabitur lobortis ac sem quis gravida. Donec enim sem, blandit sed vehicula a, tincidunt sit amet ex.
                        </p>
                        <h3 className='text-[1.25rem] relative top-[1.5rem] float-right text-blue-800 font-semibold'>
                            Famous Client   
                        </h3>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Sixth
