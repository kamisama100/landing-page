import React from 'react'

function Seventh() {
    return (
        <div className='grid xs:grid-cols-1 lg:grid-cols-2'>
            <div className='bg-[#345B63] xs:py-[4rem] sm:py-[6rem] md:py-[5rem] xs:px-[3rem] sm:px-[4rem] md:px-[6rem] space-y-[50px] text-white text-[18px]'>
                <input
                placeholder='Full Name'
                className='w-[100%] bg-transparent outline-none border-white border-b-[2px] pb-2 placeholder:text-white'
                />
                <input
                placeholder='Email Address'
                className='w-[100%] bg-transparent outline-none border-white border-b-[2px] pb-2 placeholder:text-white'
                />
                <input
                placeholder='Mobile Number'
                className='w-[100%] bg-transparent outline-none border-white border-b-[2px] pb-2 placeholder:text-white'
                />
                <textarea
                placeholder='Write your message here'
                className='w-[100%] bg-transparent outline-none border-white border-b-[2px] pb-[100px] placeholder:text-white'
                />
                <div className=' xs:text-center lg:text-left'>
                <button className='bg-[#04293A] text-white py-[15px] px-[60px]'>Send</button>
                </div>
            </div>
            <div className="bg-[url('./images/coffee.jpg')] bg-cover bg-no-repeat"/>
        </div>
    )
}

export default Seventh
