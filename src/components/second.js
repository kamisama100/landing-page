import React from 'react'
import window from '../images/window.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Second() {
    return (
        <div className='grid grid-cols-2 h-[80vh]'>
            <div className='grid bg-[#345B63] text-left justify-center place-items-center text-white'>
                <div className='w-[70%] text-[18px]'>
                    <ScrollAnimation animateIn='fade-in-right' animateOnce={true}>
                        <h3 className = 'text-[30px] font-semibold mb-2'>About Us</h3>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>    
                    <br></br>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    </ScrollAnimation>
                </div>
            </div>
            <ScrollAnimation animateIn='fade-in-right' animateOnce={true}>
                <div className='bg-[#D4ECDD] bg-opacity-60'>
                    <img src = {window} alt ="window" className='w-[65%] h-[80vh] mx-auto' />
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Second
