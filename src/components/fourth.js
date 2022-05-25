import React from 'react'
import languages from '../images/languages.PNG'
import ScrollAnimation from 'react-animate-on-scroll';
function Fourth() {
    return (
        <div className='w-full xs:h-[110vh] md:h-[80vh] xs:min-h-[700px] md:min-h-[500px] bg-[#3775c5] text-white text-[18px] xs:space-x-0 lg:space-x-10 md:px-5 lg:px-0'>
            <div className='relative xs:top-[6rem] sm:top-[6.5rem] md:top-[8rem] lg:top-[5rem] flex xs:flex-col md:flex-row place-content-center'>
                <div className='xs:w-[80%] sm:w-[90%] md:w-[65%] lg:w-[60%] h-fit sm:mt-0 xs:mx-auto md:mx-0 xs:text-center md:text-left md:py-[2rem] lg:py-[5rem] '>
                    <ScrollAnimation animateIn='fade-in-left' animateOnce={true} >
                        <h3 className='sm:text-[30px] md:text-[25px] lg:text-[30px] font-bold relative bottom-3'>
                        We use cutting edge technology
                        </h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptate   m accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </ScrollAnimation>
                </div>
                <div className='relative xs:w-full md:w-fit h-fit xs:top-[2rem] md:top-0 '>
                    <ScrollAnimation animateIn='fade-in-right' animateOnce={true}>
                        <img className='xs:w-[17rem] sm:w-[20rem] md:w-[15rem] lg:w-[20rem] xs:mx-auto md:mx-0' src = {languages} alt="languages" />
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Fourth
