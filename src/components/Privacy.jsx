import React from 'react'
import PrivacyImg from '../assets/images/png/privacy-img.png'

const Privacy = () => {
    return (
        <div className='lg:py-10 py-5 relative'>
            <div className='container mx-auto xl:max-w-[1164px] px-3'>
                <div className='flex items-center lg:justify-between justify-center flex-wrap flex-row'>
                    <div className='xl:w-[45%] lg:w-[47%] sm:w-[70%] w-full'>
                        <img src={PrivacyImg} alt="PrivacyImg" className='w-full' />
                    </div>
                    <div className='xl:w-[45.5%] lg:w-[50%] w-full lg:mt-0 sm:mt-10 mt-6'>
                        <h2 className='sm:text-[48px] text-[33px] font-normal leading-[120%] text-white'>Are you sure your <span className='text-[#BAFF00]'>data is safe</span>? Neither are we.</h2>
                        <div className='mt-4 pl-4 relative border-s-[2px] border-solid border-[#BAFF0099]'>
                            <p className='text-[16px] font-normal leading-[150%] text-white opacity-80'>In today's digital world, the risk of cyber attacks is constantly increasing. It is no longer the hackers themselves who exploit security gaps in systems to enrich themselves on a smaller scale. In the meantime, it is more about criminal structures that acquire weak points on the hacker black market in order to later extort large ransom sums.</p>
                            <p className='text-[16px] font-normal leading-[150%] text-white opacity-80 mt-[10px]'>Statistics from the German Federal Office for Information Security (BSI) show that the number of vulnerabilities in commercial software has increased significantly compared to the previous year. In addition, there is a large number of unreported vulnerabilities that have not yet been discovered. This is exactly where Cybertise comes in: we find weaknesses in IT systems.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#7CF623] lg:w-[504px] w-[300px] lg:h-[449px] h-[300px] absolute top-[14%] right-[-17%] opacity-10 blur-[110px]'></div>
        </div>
    )
}

export default Privacy
