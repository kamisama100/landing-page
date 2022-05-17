import React from 'react'
import languages from '../images/languages.PNG'
import ScrollAnimation from 'react-animate-on-scroll';
function Fourth() {
    return (
        <div className='grid grid-flow-col-dense bg-[#3775c5] h-[75vh] p-[100px] text-white text-[18px]'>
            <div className='grid place-content-center w-[80%]'>
                <ScrollAnimation animateIn='fade-in-left' animateOnce={true} >
                    <h3 className='text-[30px] font-bold relative bottom-3'>
                    We use cutting edge technology
                    </h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn='fade-in-right' animateOnce={true}>
            <div className='w-fit'>
                <img className='w-[300px]' src = {languages} alt="languages" />
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default Fourth
