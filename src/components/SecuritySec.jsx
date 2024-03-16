import React from 'react'
import SecutityImg from '../assets/images/png/security-img.png';

const SecuritySec = () => {
    return (
        <div className='pt-[87px] pb-[79px]'>
            <div className='container mx-auto xl:max-w-[1164px] px-3 relative z-10'>
                <div className='flex justify-between items-center flex-wrap'>
                    <div className='w-[46%]'>
                        <h2 className='sm:text-[48px] text-[33px] font-normal leading-[120%] text-white md:mb-4 mb-3'>Offensive <span className='text-[#BAFF00] '>Security Experts </span></h2>
                        <div className='mt-[10px] pl-4 relative border-s-[2px] border-solid border-[#BAFF0099]'>
                            <p className='text-[16px] font-normal leading-[150%] text-white opacity-80'>Cybertise offers offensive security services that help your company to make the systems of your external IT landscape more secure. This approach simulates attacks to expose vulnerabilities that may not have been detected by defensive measures. In addition, this strategy can help to test and evaluate the effectiveness of existing security measures.</p>
                            <p className='text-[16px] font-normal leading-[150%] text-white opacity-80 mt-[10px]'>Our core competence lies in the implementation of various pentesting services that are specially tailored to the needs of our customers. In addition to this, we also offer other services in this area. Below you will find an overview of our service portfolio.</p>
                        </div>
                    </div>
                    <div className='w-[48%]'>
                        <img src={SecutityImg} alt="SecutityImg" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecuritySec