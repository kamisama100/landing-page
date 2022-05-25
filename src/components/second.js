import React from 'react'
import window from '../images/window.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Second() {
    return (
        <div className='xs:flex xs:flex-col lg:grid lg:grid-cols-2 lg:h-[80vh] xs:lg-min-h-0 lg:min-h-[500px]'>
            <div className='grid place-content-center bg-[#345B63] text-white'>
                <div className='xs:grid xs:place-content-center xs:h-[95vh] xs:min-h-[530px] lg:h-full xs:w-[80%] lg:w-[70%] xs:text-[17px] lg:text-[18px] xs:text-center lg:text-left mx-auto'>
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
                <div className='flex bg-[#D4ECDD] bg-opacity-60 xs:h-[75vh] lg:h-full xs:min-h-[420px]'>
                    <img src = {window} alt ="window" className='xs:w-[70%] sm:w-[60%] md:w-[50%] lg:w-[65%] xs:h-[65vh] lg:h-[80vh] xs:min-h-[350px] lg:min-h-[500px] mx-auto my-auto' />
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Second
