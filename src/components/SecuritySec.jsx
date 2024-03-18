import React from 'react'
import SecutityImg from '../assets/images/webp/security-img.webp';

const SecuritySec = () => {
    return (
        <div id='privacy' className='lg:pt-[87px] lg:pb-[79px] md:py-[60px] sm:py-10 py-5 relative'>
            <div className='container mx-auto xl:max-w-[1164px] px-3 relative z-10'>
                <div className='flex lg:justify-between justify-center flex-col-reverse lg:flex-row items-center flex-wrap relative'>
                    <div data-aos="zoom-in" className='lg:w-[46%] w-full lg:mt-0 md:mt-10 mt-6'>
                        <h2 className='sm:text-[48px] text-[33px] font-normal leading-[120%] text-white md:mb-4 mb-3'>Offensive <span className='text-[#BAFF00] '>Security Experts </span></h2>
                        <div className='mt-[10px] pl-4 relative border-s-[2px] border-solid border-[#BAFF0099]'>
                            <p className='text-[16px] font-normal leading-[150%] text-white opacity-80'>Cybertise offers offensive security services that help your company to make the systems of your external IT landscape more secure. This approach simulates attacks to expose vulnerabilities that may not have been detected by defensive measures. In addition, this strategy can help to test and evaluate the effectiveness of existing security measures.</p>
                            <p className='text-[16px] font-normal leading-[150%] text-white opacity-80 mt-[10px]'>Our core competence lies in the implementation of various pentesting services that are specially tailored to the needs of our customers. In addition to this, we also offer other services in this area. Below you will find an overview of our service portfolio.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[48%] md:w-[70%] w-full'>
                        <img src={SecutityImg} alt="SecutityImg" className='w-full' />
                    </div>
                    <div className='w-[520px] h-[397px] bg-[#23C1CE] opacity-20 absolute left-[7%] top-[10%] blur-[500px]'></div>
                </div>
            </div>
            <div className='w-[447px] h-[397px] bg-[#7CF623] opacity-20 absolute left-[-7%] top-[10%] blur-[350px]'></div>
        </div>
    )
}

export default SecuritySec