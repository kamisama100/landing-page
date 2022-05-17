import React from 'react'
import menu from '../images/menu.png'

function First() {
    return (
        <div className='grid grid-cols-2 p-10 px-[100px] h-screen text-white'>
            <div className='col-span-1 h-fit relative top-2'>
                <h3 className='font-bold text-[24px]'>BRAND NAME</h3>
            </div>
            <div className='col-span-1 h-fit'>
                <button className='float-right'>
                    <img src = {menu} alt = "menu" className='w-[45px]' />
                </button>
            </div>
            <div className='col-span-2 text-center h-fit'>
                    <h1 className='text-[58px] font-extrabold tracking-wide fade-in-no-delay '>Build A Brand</h1>
                    <p className='text-[18px] w-[60%] mx-auto fade-in-delay'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
            </div>
        </div>
    )
}

export default First
