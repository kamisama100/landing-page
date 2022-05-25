import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function Sixth() {
    return (
        <div className='flex bg-[#D4ECDD] bg-opacity-80 h-[140vh] text-black'>
            <h3 className='relative left-[6rem] top-[5rem] h-fit font-bold text-[30px]'>
            Comments from our Clients
            </h3>
            <div className='flex flex-col text-left relative right-[21%] my-[160px] text-black bg-white w-[520px] h-[550px] p-[50px] py-[60px] text-[16px] font-[500]'>
                <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                    <div className='h-[100%]'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dui eu arcu dictum vestibulum ut eu augue. Curabitur lobortis ac sem quis gravida. Donec enim sem, blandit sed vehicula a, tincidunt sit amet ex.
                        </p>
                        <h3 className='relative top-5 float-right text-blue-800 font-semibold'>
                            Famous Client
                        </h3>
                    </div> 
                </ScrollAnimation>
                <ScrollAnimation animateIn='fade-in-right' animateOnce={true}>
                    <div className='h-[100%] relative top-10'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dui eu arcu dictum vestibulum ut eu augue. Curabitur lobortis ac sem quis gravida. Donec enim sem, blandit sed vehicula a, tincidunt sit amet ex.
                        </p>
                        <h3 className='relative top-5 float-right text-blue-800 font-semibold'>
                            Famous Client
                        </h3>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Sixth
