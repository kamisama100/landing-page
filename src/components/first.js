import React from 'react'
import menu from '../images/menu.png'

function First() {
    return (
        <div className='max-w-full text-white'>
            <div className='flex flex-col h-screen'>
                <div className='flex max-w-full xs:px-[40px] xs:py-[20px] md:px-[100px] md:py-[35px]'>
                    <div className='h-full mt-1'>
                        <h3 className='font-bold xs:text-[25px] sm:text-[24px]'>BRAND NAME</h3>
                    </div>
                    <div className='h-fit ml-auto'>
                        <button className=''>
                            <img src = {menu} alt = "menu" className='w-[45px]' />
                        </button>   
                    </div>
                </div>
                <div className='xs:grid xs:place-items-center xs:place-content-center xs:h-[100%] md:relative md:bottom-[55px] text-center space-y-5'>
                        <h1 className='xs:leading-[3rem] w-[50%] xs:text-[40px] md:text-[58px] font-extrabold md:tracking-wide fade-in-no-delay'>Build A Brand</h1>
                        <p className='xs:leading-[1.40rem] md:leading-[1.75rem] font-[500] text-[18px] w-[60%] xs:tracking-tighter md:tracking-wide fade-in-delay'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto debitis consequuntur molestias deleniti, vel est earum pariatur vero cupiditate, aut eaque temporibus quis atque. Obcaecati labore sit ab! Et?
                        </p>
                </div>
            </div>
        </div>
    )
}

export default First
