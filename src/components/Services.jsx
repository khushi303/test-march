import React from 'react'
import { PentestImg, CrowdImg, VrpImg } from './Icons'

const Services = () => {
    return (
        <div className="lg:mt-10 md:mt-7 mt-5 bg-[url('./assets/images/png/bg-services.png')] bg-cover bg-center bg-no-repeat relative">
            <div className='bg-gradient-to-b from-[rgba(17,17,16,0)] via-[rgba(12,12,12,0.44) ] to-[#0C0C0C] absolute left-0 right-0 h-[104px] top-[-20px] blur-[8px]'></div>
            <div className='container mx-auto xl:max-w-[1164px] px-3 xl:pt-[114px] xl:pb-[113px] lg:py-[60px] py-6 relative z-20'>
                <h2 className='sm:text-[48px] text-[33px] font-normal leading-[120%] text-white text-center md:mb-4 mb-3'>Our <span className='text-[#BAFF00] '>Services</span></h2>
                <p className='text-[16px] font-normal text-center text-white leading-[150%]'>Dolor ipsum facilisi facilisis diam mi dis. Et gravida porta quam risus consectetur est <span className='lg:block'>imperdiet. Enim feugiat nisl dolor dui est. </span></p>
                <div className='flex lg:justify-between justify-center lg:gap-0 gap-4 flex-wrap lg:items-start items-center md:mt-10 mt-6 relative z-20'>
                    <div className='lg:w-[32.3%] md:w-[48%] sm:w-[80%] w-full'>
                        <div className="md:min-h-[318px] h-full border border-solid border-[#FFFFFF29] bg-[url('./assets/images/png/service-box-image.png')] bg-center bg-cover bg-no-repeat sm:py-10 py-7 rounded-[16px] px-[18px] flex items-center justify-start flex-col pl-[18px] pr-[22px] backdrop-blur-[20px] transition-all duration-300 ease-linear group hover:border-[#BAFF00] cursor-pointer">
                            <PentestImg />
                            <h3 className='text-[24px] font-semibold text-white text-center leading-[140%] sm:mt-5 mt-3 mb-2'>PentestImg</h3>
                            <p className='leading-[150%] text-[16px] font-normal text-white opacity-80 text-center'>Cybertise's pentesting enhances digital security with manual 'BlackBox' and 'GreyBox' tests emulating real attacks, offering risk <span className='xl:block'>solutions for diverse systems.</span></p>
                        </div>
                    </div>
                    <div className='lg:w-[32.3%] md:w-[48%] sm:w-[80%] w-full'>
                        <div className="md:min-h-[318px] h-full border border-solid border-[#FFFFFF29] bg-[url('./assets/images/png/service-box-image.png')] bg-center bg-cover bg-no-repeat sm:py-10 py-7 rounded-[16px] px-[18px] flex items-center justify-start flex-col pl-[18px] pr-[22px] backdrop-blur-[20px] transition-all duration-300 ease-linear group hover:border-[#BAFF00] cursor-pointer">
                            <CrowdImg />
                            <h3 className='text-[24px] font-semibold text-white text-center leading-[140%] sm:mt-5 mt-3 mb-2'>Crowd-Sourced Pentests</h3>
                            <p className='leading-[150%] text-[16px] font-normal text-white opacity-80 text-center'>Cybertise advances beyond pen tests, employing expert teams to comprehensively probe targets from multiple angles, ensuring precise, efficient vulnerability<span className='xl:block'>
                                identification.</span></p>
                        </div>
                    </div>
                    <div className='lg:w-[32.3%] md:w-[48%] sm:w-[80%] w-full'>
                        <div className="md:min-h-[318px] h-full border border-solid border-[#FFFFFF29] bg-[url('./assets/images/png/service-box-image.png')] bg-center bg-cover bg-no-repeat sm:py-10 py-7 rounded-[16px] px-[18px] flex items-center justify-start flex-col pl-[18px] pr-[22px] backdrop-blur-[20px] transition-all duration-300 ease-linear group hover:border-[#BAFF00] cursor-pointer">
                            <VrpImg />
                            <h3 className='text-[24px] font-semibold text-white text-center leading-[140%] sm:mt-5 mt-3 mb-2'>VRP</h3>
                            <p className='leading-[150%] text-[16px] font-normal text-white opacity-80 text-center'>Cybertise's VRP (BugBounty) is the ultimate security step, eradicating last vulnerabilities with swift incident response. Elevates <span className='xl:block'>security beyond pentesting.</span></p>
                        </div>
                    </div>
                    <div className='bg-[#7CF623] opacity-10 w-[175px] h-[190px] absolute top-[-15%] left-[20%] blur-[130px] z-[1]'></div>
                </div>
            </div>
            <div className='bg-gradient-to-b from-[rgba(17,17,16,0)] via-[rgba(12,12,12,0.44) ] to-[#0C0C0C] absolute left-0 right-0 h-[104px] bottom-[-34px] blur-[8px]'></div>
        </div>
    )
}

export default Services