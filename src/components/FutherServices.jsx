import React from 'react'
import FurtherImg from '../assets/images/webp/Further.webp';

const FutherServices = () => {
    return (
        <div id='service' className="bg-[url('./assets/images/webp/bg-fur.webp')] bg-cover bg-center bg-no-repeat relative">
            <div className='container mx-auto xl:max-w-[1164px] px-3 xl:py-[101px] lg:py-[80px] md:py-[60px] sm:py-10 py-5'>
                <div className='flex flex-wrap flex-row lg:justify-between justify-center items-center relative'>
                    <div data-aos="zoom-in" className='xl:w-[43%] lg:w-[46%] sm:w-[70%] w-full relative z-20'>
                        <img src={FurtherImg} alt="FurtherImg" className='w-full' />
                    </div>
                    <div data-aos="zoom-in" className='xl:w-[48%] lg:w-[50%] lg:mt-0 sm:mt-10 mt-6 w-full relative z-20'>
                        <h2 className='sm:text-[48px] text-[33px] font-normal leading-[120%] text-white mb-[10px]'>Further <span className='text-[#BAFF00] '>Services</span></h2>
                        <p className='text-[16px] font-normal text-white leading-[150%] mb-[10px] opacity-80'>Neben den oben genannten Kernkompetenzen bieten wir auch weitere IT-Sicherheitsdienstleistungen in diesem Bereich an.</p>
                        <h3 className='text-[24px] font-semibold text-white mb-[10px]'>Awareness Audits</h3>
                        <p className='text-[16px] font-normal leading-[150%] text-white pl-4 border-s border-solid border-[#BAFF00] opacity-80 mb-[10px]'>We conduct simulated phishing tests and social engineering audits to gauge employee readiness, offering guidance and training if needed.</p>
                        <h3 className='text-[24px] font-semibold text-white mb-[10px]'>Vulnerability Management</h3>
                        <p className='text-[16px] font-normal leading-[150%] text-white pl-4 border-s border-solid border-[#BAFF00] opacity-80 mb-[10px]'>Our Managed VAS enhances network security through automated scans, adaptable to various assets, with setup and support services provided.</p>
                        <h3 className='text-[24px] font-semibold text-white mb-[10px]'>Crisis Management</h3>
                        <p className='text-[16px] font-normal leading-[150%] text-white pl-4 border-s border-solid border-[#BAFF00] opacity-80'>Cybertise offers rapid, dependable crisis management aid for cyber attacks, swiftly restoring operations and minimizing impact through expert collaboration.</p>
                    </div>
                    <div className='bg-[#23C1CE] w-[520px] h-[350px] opacity-20 absolute right-0 blur-[300px] z-[1]'></div>
                </div>
            </div>
            <div className='bg-[#7CF623] lg:w-[447px] w-[250px] lg:h-[397px] h-[200px] absolute top-[22%] right-[-32%] blur-[302px] z-[1]'></div>
        </div>
    )
}

export default FutherServices